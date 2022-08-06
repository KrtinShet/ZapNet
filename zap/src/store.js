import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./reducers/walletReducer";

export default configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
