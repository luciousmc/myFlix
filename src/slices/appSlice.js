import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state = action.payload
    }
  }
});

export const { addItem } = appSlice.actions;

// Selectors
export const selectItems = (state) => state.app;

export default appSlice.reducer;