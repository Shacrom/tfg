import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../auth/layouts/AuthLayout';
import { useForm } from '../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../store/slices';


export const LoginScreen = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const { email, password, onInputChange } = useForm({
    email: 'marcos@marcos.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
    console.log(errorMessage);
    navigate('/map');
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    navigate('/map');
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
          <Grid item xs={12} sx={{ mt: 2 }} display={!!errorMessage ? '' : 'none'}>
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
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
                disabled={isAuthenticating}
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
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
