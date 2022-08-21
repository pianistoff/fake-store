import { createSlice } from '@reduxjs/toolkit';

export const displaySnackbarSlice = createSlice({
    name: 'displaySnackbar',
    initialState: false,
    reducers: {
        show: () => {
            return true;
        },
        hide: () => {
            return false;
        }
    },
});

export const { show, hide } = displaySnackbarSlice.actions;

export default displaySnackbarSlice.reducer;

export const selectDisplaySnackbar = (state) => state.displaySnackbar;