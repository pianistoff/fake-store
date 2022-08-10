import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        switchToDark: state => {
            state.darkMode = true;
        },
        switchToLight: state => {
            state.darkMode = false;
        }
    }
})

export const { switchToLight, switchToDark } = darkModeSlice.actions;

export default darkModeSlice.reducer;