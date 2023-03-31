import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import { selectThemeMode } from './userSettingsSlice';

function CustomThemeProvider({ children }) {
  const themeMode = useSelector(selectThemeMode);

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
