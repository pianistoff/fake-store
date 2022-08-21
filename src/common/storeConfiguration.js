import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './userSettingsSlice';
import usersReducer from './usersSlice';
import displaySnackbarReducer from './displaySnackbarSlice';

const store = configureStore({
    reducer: {
        userSettings: userSettingsReducer,
        users: usersReducer,
        displaySnackbar: displaySnackbarReducer
    },
});

export default store;