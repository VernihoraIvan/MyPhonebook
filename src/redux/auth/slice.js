import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, refreshing, logOut } from './thunk';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isAuthError: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [register.rejected](state, _action) {
      state.isAuthError = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
    },
    [logIn.rejected](state, _action) {
      state.isAuthError = true;
    },
    [refreshing.pending](state, _action) {
      state.isRefreshing = true;
    },
    [refreshing.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isRefreshing = false;
    },
    [refreshing.rejected](state, _action) {
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state, _action) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthError = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
