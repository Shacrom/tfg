import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './routers/AppRouter'
import { AppTheme } from './theme'

export const TfgApp = () => {
  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}
