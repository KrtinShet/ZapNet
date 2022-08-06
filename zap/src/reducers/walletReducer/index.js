import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "wallet",
  initialState: {
    isConnected: false,
    address: null,
  },
  reducers: {
    login: (state, action) => {
      state.isConnected = true;
      state.address = action.payload;
    },
    logout: (state) => {
      state.address = null;
      state.isConnected = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
