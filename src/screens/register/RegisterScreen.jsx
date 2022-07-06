import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../auth/layouts/AuthLayout';
import { useForm } from '../../hooks';
import validator from 'validator';
import { startCreatingUser } from '../../store/slices';

export const RegisterScreen = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const formInitialState = {
    displayName: '',
    email: '',
    password: ''
  }

  // TODO: change line validations
  const formValidations = {
    displayName: [/* (value) => value.length >= 2 */() => true, 'El nombre debe contener al menos 3 letras'],
    email: [/* (value) => validator.isEmail(value) */() => true, 'El correo debe contener una @'],
    password: [/* (value) => validator.isStrongPassword(value) */() => true, 'La contraseña no es lo suficientemente segura'],
  }

  const { displayName, email, password, formState, onInputChange,
    displayNameValid, emailValid, passwordValid, isFormValid
  } = useForm(formInitialState, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUser(formState));
    navigate('/map');
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo@email.com"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2, mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} >
              <Button
                disabled={isCheckingAuthentication}
                variant='contained'
                type='submit'
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent={'end'}>
            <Typography sx={{ mx: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
