import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../src/slices/appReducer";


export const store = configureStore({
  reducer: {
    app: appReducer
  }
})

