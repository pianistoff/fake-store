import { configureStore } from "@reduxjs/toolkit";

import allProductsReducer from "./allProductsSlice";
import displaySnackbarReducer from "./displaySnackbarSlice";
import userSettingsReducer from "./userSettingsSlice";
import usersReducer from "./usersSlice";

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
