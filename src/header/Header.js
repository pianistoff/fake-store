import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import CategoriesNavigation from './CategoriesNavigation';
import { switchToDark, switchToLight } from '../common/userSettingsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectThemeMode } from './../common/userSettingsSlice';
import LanguageDropdown from './LanguageDropdown';

export default function Header() {
    const themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    const toggleMode = () => {
        if (themeMode === 'light') {
            dispatch(switchToDark());
        } else if (themeMode === 'dark') {
            dispatch(switchToLight());
        }
    };

    let themeModeButton;
    if (themeMode === 'light') {
        themeModeButton = <DarkModeIcon />;
    } else if (themeMode === 'dark') {
        themeModeButton = <LightModeIcon />;
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', marginRight: 'auto' }}>
                    <Typography variant="h6" component="h1" color="white">
                        FAKE STORE
                    </Typography>
                </Link>
                <LanguageDropdown />
                <IconButton
                    size="large"
                    aria-label="mode"
                    color="inherit"
                    onClick={toggleMode}
                >
                    {themeModeButton}
                </IconButton>
                <IconButton size="large" aria-label="cart" color="inherit">
                    <Link to="/cart" style={{ color: 'white' }}>
                        <ShoppingCartIcon />
                    </Link>
                </IconButton>
                <IconButton size="large" aria-label="account" color="inherit">
                    <Link to="/login" style={{ color: 'white' }}>
                        <AccountCircleIcon />
                    </Link>
                </IconButton>
            </Toolbar>
            <CategoriesNavigation />
        </AppBar>
    );
}
