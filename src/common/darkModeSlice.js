import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: false,
    reducers: {
        switchToDark: () => {
            return true;
        },
        switchToLight: () => {
            return false;
        }
    }
})

export const { switchToLight, switchToDark } = darkModeSlice.actions;

export default darkModeSlice.reducer;