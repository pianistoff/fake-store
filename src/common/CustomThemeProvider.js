import React from 'react';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectThemeMode } from './userSettingsSlice';

const CustomThemeProvider = ({children}) => {
    const themeMode = useSelector(selectThemeMode);

    return (
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider;
