import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isShowCart: false, notification: null, isLoading: false },
  reducers: {
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    toggleShow(state, action) {
      state.isShowCart = !state.isShowCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
