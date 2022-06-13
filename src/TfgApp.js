import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './routers/AppRouter'

export const TfgApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
