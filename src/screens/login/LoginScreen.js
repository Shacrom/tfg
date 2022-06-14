import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const LoginScreen = () => {
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogin = () => {

    login('Marcos Miguel');

    navigate('/map', {
      replace: true
    });
  };

  return (
    <div className='container mt-4' >
      <h1>LoginScreen</h1>
      <hr/>
      <button 
        className='btn btn-primary'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
