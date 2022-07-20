import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from './NavBar'
import { SideBar } from './SideBar';


const sideBarWidth = 200;

export const TfgLayout = ({ children }) => {


    return (
        <Box>
            <Grid container>
                <Grid item >
                    <NavBar sideBarWidth={sideBarWidth} />
                </Grid>
                {/* <Grid item sx={{ mt: 10 }}>
                    <SideBar sideBarWidth={sideBarWidth} />
                </Grid> */}
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3 }}
                >
                    {children}
                </Box>
            </Grid>
        </Box>


    )
}
