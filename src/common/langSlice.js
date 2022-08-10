import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: "uk"
}

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        switchToEn: state => {
            state.lang = "en";
        },
        switchToUk: state => {
            state.lang = "uk";
        }
    }
})

export const { switchToEn, switchToUk } = langSlice.actions;

export default langSlice.reducer;