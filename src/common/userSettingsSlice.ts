import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./storeConfiguration";

type UserSettingsState = {
  themeMode: "light" | "dark";
  language: "uk" | "en";
};

const initialState: UserSettingsState = { themeMode: "light", language: "uk" };

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    switchToEn: (state) => {
      return { ...state, language: "en" };
    },
    switchToUk: (state) => {
      return { ...state, language: "uk" };
    },
    switchToDark: (state) => {
      return { ...state, themeMode: "dark" };
    },
    switchToLight: (state) => {
      return { ...state, themeMode: "light" };
    },
  },
});

export const { switchToEn, switchToUk, switchToDark, switchToLight } =
  userSettingsSlice.actions;

export default userSettingsSlice.reducer;

export const selectLanguage = (state: RootState) => state.userSettings.language;
export const selectThemeMode = (state: RootState) =>
  state.userSettings.themeMode;
