import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import authReducer from './authSlice'

export default configureStore({
  reducer: {
    balance: balanceReducer,
    auth: authReducer,
  },
});
