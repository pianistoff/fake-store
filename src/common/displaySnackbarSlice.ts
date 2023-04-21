import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./storeConfiguration";

export const displaySnackbarSlice = createSlice({
  name: "displaySnackbar",
  initialState: false,
  reducers: {
    showSnackbar: () => true,
    hideSnackbar: () => false,
  },
});

export const { showSnackbar, hideSnackbar } = displaySnackbarSlice.actions;

export default displaySnackbarSlice.reducer;

export const selectDisplaySnackbar = (state: RootState) =>
  state.displaySnackbar;
