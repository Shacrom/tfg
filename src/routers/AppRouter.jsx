import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckingAuth } from '../layouts'
import { login, logout } from '../store/slices'
import { AuthRouter } from './AuthRouter'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      console.log({ user: { uid: uid, email: email }, });
      dispatch(login({ uid, email, displayName, photoURL }));
    })
  }, [])

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        (status === 'authenticaded')
          ? <Route path="/*" element={<DashboardRoutes />} />
          : <Route path="/auth/*" element={<AuthRouter />} />
      }
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
