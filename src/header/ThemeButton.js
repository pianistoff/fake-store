import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectThemeMode } from './../common/userSettingsSlice';
import { switchToDark, switchToLight } from '../common/userSettingsSlice';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeButton = () => {
    const themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    const toggleMode = () => {
        if (themeMode === 'light') {
            dispatch(switchToDark());
        } else if (themeMode === 'dark') {
            dispatch(switchToLight());
        }
    };

    return (
        <IconButton
            size="large"
            aria-label="mode"
            color="inherit"
            onClick={toggleMode}
        >
            {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default ThemeButton;
