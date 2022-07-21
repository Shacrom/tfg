import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../hooks'
import { CheckingAuth, TfgLayout } from '../layouts'
import { login, logout, startLoginWithEmailPassword } from '../store/slices'
import { AuthRouter } from './AuthRouter'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  const { getToken } = useAuthStore();
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return dispatch(logout("User don't exist"));
      }
      else {
        setUserData(user);
        setToken(await getToken());
      }
    })
  }, [])

  useEffect(() => {
    const { uid, email, displayName, photoURL } = userData;
    dispatch(login({ uid, email, displayName, photoURL, token }));
  }, [token])



  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        (status === 'authenticaded')
          ? <Route path="/*" element={
            <TfgLayout>
              <DashboardRoutes />
            </TfgLayout>
          } />
          : <Route path="/auth/*" element={<AuthRouter />} />
      }
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
