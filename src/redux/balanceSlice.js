import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 0,
  },
  reducers: {
    deposit: (state, action) => {
      state.value = state.value + action.payload;
    },
    withdraw: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions

export default balanceSlice.reducer