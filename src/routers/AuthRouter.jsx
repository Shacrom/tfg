import React from 'react'
import { RegisterScreen } from '../screens/RegisterScreen'
import { LoginScreen } from '../screens/LoginScreen'
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