import { async } from "@firebase/util";
import { logingWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { login, logout, checkingCredentials } from "./"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUser = ({ displayName, email, password }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({ displayName, email, password });

        if (!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid,displayName,email,photoURL}));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await logingWithEmailPassword({email, password});
        console.log(result);
        const errorMessage = result.errorMessage;
        if(!result.ok) return dispatch(logout({errorMessage}));
        const {uid, displayName, photoURL} = result;
        dispatch(login({uid,displayName,email,photoURL}))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        const result = await logoutFirebase();
        dispatch(logout());

    }
}