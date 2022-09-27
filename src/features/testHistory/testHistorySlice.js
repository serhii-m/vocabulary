import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "../../util/index";

const initialState = getInitialState("history");

export const testHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    testAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { testAdded } = testHistorySlice.actions;

export const showTestHistory = (state) => state.history;

export default testHistorySlice.reducer;
