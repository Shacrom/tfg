import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../../auth/layouts/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { checkingCredentials, startGoogleSignIn } from '../../store/slices';

export const LoginScreen = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'corre@gmail.com',
    password: '1234'
  })


  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch(checkingCredentials());
  }

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  }

  /* const handleLogin = () => {

    login('Marcos Miguel');

    navigate('/map', {
      replace: true
    });
  }; */

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@gmail.com'
              value={email}
              name="email"
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              value={password}
              name="password"
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant='contained'
                fullWidth
              /* onClick={handleLogin} */
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                variant='contained'
                onClick={onGoogleSignIn} 
                fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent={'end'}>
            <Link component={RouterLink} color='inherit' to="/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
