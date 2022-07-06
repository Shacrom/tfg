import React from 'react'
import { RegisterScreen } from '../screens/register/RegisterScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { Route, Routes } from 'react-router-dom'
export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </>
  )
}
