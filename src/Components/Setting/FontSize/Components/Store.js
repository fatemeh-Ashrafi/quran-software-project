
import { configureStore } from "@reduxjs/toolkit";
import FontSizeSlice from "../Feature/FontSizeSlice";

export const store = configureStore({
  reducer: {
    fontSize: FontSizeSlice,
  },
});