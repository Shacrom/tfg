import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FirebaseAuth } from '../firebase/config'
import { CheckingAuth } from '../layouts'
import { LoginScreen } from '../screens/login/LoginScreen'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import { login, logout } from '../store/slices'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    })
  }, [])


  if (status === 'checking') {
    return <CheckingAuth />
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        } />
        <Route path="register" element={
          <RegisterScreen />
        } />
        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}
