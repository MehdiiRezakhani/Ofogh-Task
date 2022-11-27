import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
  },
  reducers: {
    logoutHandler(state, action) {
      state.token = "";
      localStorage.removeItem("token");
      state.isLoggedIn = !!state.token;
    },
    loginHandler(state, action) {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      state.isLoggedIn = !!state.token;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
