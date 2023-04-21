import { configureStore } from "@reduxjs/toolkit";
import userSettingsReducer from "./userSettingsSlice";
import usersReducer from "./usersSlice";
import displaySnackbarReducer from "./displaySnackbarSlice";
import allProductsReducer from "./allProductsSlice";

const store = configureStore({
  reducer: {
    userSettings: userSettingsReducer,
    users: usersReducer,
    displaySnackbar: displaySnackbarReducer,
    allProducts: allProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
