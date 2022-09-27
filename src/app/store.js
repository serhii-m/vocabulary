import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from "../features/vocabulary/vocabularySlice";
import historyReducer from "../features/testHistory/testHistorySlice";

export const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
    history: historyReducer,
  },
});
