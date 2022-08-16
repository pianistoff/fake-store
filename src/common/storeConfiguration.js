import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './userSettingsSlice';
import usersReducer from './usersSlice';

const store = configureStore({
    reducer: {
        userSettings: userSettingsReducer,
        users: usersReducer
    },
});

export default store;