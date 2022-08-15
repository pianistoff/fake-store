import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './common/userSettingsSlice';

const store = configureStore({
    reducer: {
        userSettings: userSettingsReducer,
    },
});

const root = createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
