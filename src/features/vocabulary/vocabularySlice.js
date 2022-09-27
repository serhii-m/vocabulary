import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "../../util/index";

const initialState = getInitialState("vocabulary");

export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    wordAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { wordAdded } = vocabularySlice.actions;

export const showVocabulary = (state) => state.vocabulary;

export default vocabularySlice.reducer;
