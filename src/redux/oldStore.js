import { configureStore, createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: 0,
  reducers: {
    deposit: (state, action) => {
      return state + action.payload;
    },
    withdraw: (state, action) => {
      return state - action.payload;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // dispatch { type: 'auth/login', payload: { email: '', profileImg: 'https' } }
      return {
        user: action.payload,
      };
    },
    logout: (state, action) => {},
    updateUser: (state, action) => {
      // dispatch { type: 'auth/updateUser', payload: { profileImg: 'new url' }}
      // old state { user: { email: '', profileImg: 'https' } }
      // const newState = structuredClone(state)
      // newState.user.profileImg = action.payload.profileImg
      // return newState

      // immer lib
      state.user.profileImg = action.payload.profileImg
    },
  },
});

console.log(balanceSlice);

export const { deposit, withdraw } = balanceSlice.actions;

// state: auth, todo, balance
const store = configureStore({
  reducer: {
    auth: (state = null, action) => {
      return state;
    },
    todo: (state = [], action) => {
      // action 1.fetchTodo, 2.createTodo, 3.deleteTodo, 4.updateTodo
      // vvv dont do this vvv
      // if (action.type === 'fetchTodo') {
      //   const res = await axios.get('http')
      //   return res.data.todos
      // }
      return state;
    },
    balance: balanceSlice.reducer,
    // balance: (state = 0, action) => {
    // action { type: , payload:  }
    // type 1.deposit, 2.withdraw
    // if (action.type === 'deposit') {
    // return state + action.payload;
    // } else if (action.type === 'withdraw') {
    // return state - action.payload;
    // }
    // return state;
    // },
  },
});

export default store;
