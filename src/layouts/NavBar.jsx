import { MenuOutlined, LogoutOutlined} from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, startLogout } from '../store/slices';


export const NavBar = ({sideBarWidth = 0}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());    
  }
  

  return (
    <AppBar
        position='fixed'
        sx={{
          width: {sm: `calc(100% - ${sideBarWidth}px)`},
          ml: {sm: `${sideBarWidth}px`}
        }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{mr: 2, display: {sm: 'none'}}}
        >
          <MenuOutlined/>
        </IconButton>

        <Grid 
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
        > 
          <Typography variant='h6' noWrap component='div'>Texto de ejemplo</Typography>
          <IconButton color='error' onClick={handleLogout}>
            <LogoutOutlined/>
          </IconButton>

        </Grid>

      </Toolbar>
    </AppBar>
  )
}
