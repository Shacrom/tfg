
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { wowApi } from '../api/wowApi';
import { login } from '../store/slices';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const getToken = async () => {
    let token = null;
    try {
      const resp = await wowApi.get('/client');
      console.log(resp);
      token = resp.data.wowClient.defaults.token;
    } catch (error) {
      console.log(error);
    }
    return token
  }

  return {
    errorMessage,
    getToken,
    user,
  }
}
