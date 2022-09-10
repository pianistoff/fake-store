import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './userSettingsSlice';
import usersReducer from './usersSlice';
import displaySnackbarReducer from './displaySnackbarSlice';
import allProductsReducer from './allProductsSlice';

const store = configureStore({
    reducer: {
        userSettings: userSettingsReducer,
        users: usersReducer,
        displaySnackbar: displaySnackbarReducer,
        allProducts: allProductsReducer,
    },
});

export default store;
