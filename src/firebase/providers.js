import { FastfoodOutlined } from "@mui/icons-material";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {

        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async ({displayName, email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName});
    
        console.log(resp);

        return {
            ok: true,
            uid, photoURL, email, displayName,
        }

    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }
}