import { createSlice } from '@reduxjs/toolkit';

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState: { themeMode: 'light', language: 'uk' },
    reducers: {
        switchToEn: (state) => {
            state.language = 'en';
        },
        switchToUk: (state) => {
            state.language = 'uk';
        },
        switchToDark: (state) => {
            state.themeMode = 'dark';
        },
        switchToLight: (state) => {
            state.themeMode = 'light';
        }
    },
});

export const { switchToEn, switchToUk, switchToDark, switchToLight } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;

export const selectLanguage = (state) => state.userSettings.language;
export const selectThemeMode = state => state.userSettings.themeMode;