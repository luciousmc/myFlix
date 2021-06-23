import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../src/slices/appSlice";


export const store = configureStore({
  reducer: {
    app: appReducer
  }
})

