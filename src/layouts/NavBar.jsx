import { LogoutOutlined } from '@mui/icons-material'
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/slices';
import wowLogo from "../resources/images/wowLogo64.png";
import hearthstoneLogo from "../resources/images/hearthstoneLogo64.png";
import diabloLogo from "../resources/images/diabloLogo64.png";
import { useNavigate } from 'react-router-dom';


export const NavBar = ({ sideBarWidth = 0 }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  }

  const handleLogoButton = (button) => {
    console.log(button);
    navigate(`${button}`);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        /* width: { sm: `calc(100% - ${sideBarWidth}px)` }, */
        /* ml: { sm: `${sideBarWidth}px` } */
      }}
    >
      <Toolbar
        disableGutters={true}
      >
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
        >

          <Typography variant='h6' noWrap component='div'>Texto de ejemplo</Typography>

          <Grid>
            <Button onClick={() => handleLogoButton('worldofwarcraft')}>
              <img alt='World of Warcraft logo' src={wowLogo} />
            </Button>
            <Button onClick={() => handleLogoButton('hearthstone')} sx={{ mx: 10 }}>
              <img alt='Hearthstone logo' src={hearthstoneLogo} />
            </Button>
            <Button onClick={() => handleLogoButton('diablo3')}>
              <img alt='Diablo logo' src={diabloLogo} />
            </Button>
          </Grid>

          <IconButton color='secondary' onClick={handleLogout}>
            <LogoutOutlined />
          </IconButton>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}
