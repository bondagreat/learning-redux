import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {},
    getMe: (state, action) => {},
  },
});

export const { login, logout, getMe } = authSlice.actions;

export default authSlice.reducer;

// middleware: (store) => (next) => (action) => {}
export const loginAPI = (emailOrMobile, password) => async (dispatch) => {
  const res = await axios.post('http://localhost:8000/auth/login', {
    emailOrMobile: emailOrMobile,
    password: password,
  });
  localStorage.setItem('accessToken', res.data.accessToken);
  const user = jwtDecode(res.data.accessToken);
  dispatch(login(user));
};
