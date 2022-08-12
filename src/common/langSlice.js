import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
    name: "lang",
    initialState: "uk",
    reducers: {
        switchToEn: () => {
            return "en";
        },
        switchToUk: () => {
            return "uk";
        }
    }
})

export const { switchToEn, switchToUk } = langSlice.actions;

export default langSlice.reducer;