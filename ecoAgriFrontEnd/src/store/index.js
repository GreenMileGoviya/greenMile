import { configureStore } from "@reduxjs/toolkit";
import userTypeSelectorButtonSlice from "./userType-selector-slice";

const store = configureStore({
  reducer: {
    userTypeSelectorButton: userTypeSelectorButtonSlice.reducer,
  },
});

export default store;
