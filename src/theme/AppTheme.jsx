import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { blizzardTheme } from "./"
import React from "react"

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={blizzardTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
