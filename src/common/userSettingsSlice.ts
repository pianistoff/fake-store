import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../common/storeConfiguration";

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
      state.language = "en";
    },
    switchToUk: (state) => {
      state.language = "uk";
    },
    switchToDark: (state) => {
      state.themeMode = "dark";
    },
    switchToLight: (state) => {
      state.themeMode = "light";
    },
  },
});

export const { switchToEn, switchToUk, switchToDark, switchToLight } =
  userSettingsSlice.actions;

export default userSettingsSlice.reducer;

export const selectLanguage = (state: RootState) => state.userSettings.language;
export const selectThemeMode = (state: RootState) =>
  state.userSettings.themeMode;
