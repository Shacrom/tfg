import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar';


const sideBarWidth = 200;

export const TfgLayout = ({children}) => {
    
    return (
        <Box sx={{ display: "flex" }}>

            <NavBar sideBarWidth={200}/>
            <SideBar sideBarWidth={200}/>
            
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3}}
            >
                {children}
            </Box>
        </Box>


    )
}
