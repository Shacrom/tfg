import { Box } from '@mui/system'
import React from 'react'




export const TfgLayout = ({children}) => {
    
    return (
        <Box sx={{ display: "flex" }}>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3}}
            >
                {children}
            </Box>
        </Box>


    )
}
