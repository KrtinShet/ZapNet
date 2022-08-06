import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  walletAddress: null,
  totalUnitsLent: 0,
  perDayLentUnits: 0,
  maxUnitsPerDay: 0,
  hasHitMaxQuota: 0,
  currentUnitsLeft: 0,
  transactions: [],
};

export const counterSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getData: async (state) => {
        const data = await axios.get()
    },
    clearData: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData } = counterSlice.actions;

export default counterSlice.reducer;
