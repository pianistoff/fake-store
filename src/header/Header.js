import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { switchToDark, switchToLight } from '../common/userSettingsSlice';
import { switchToEn, switchToUk } from '../common/userSettingsSlice';
import { useSelector, useDispatch } from 'react-redux';
import i18n from 'i18next';
import { selectThemeMode } from './../common/userSettingsSlice';
import { selectLanguage } from './../common/userSettingsSlice';

export default function Header() {
    const themeMode = useSelector(selectThemeMode);
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    React.useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

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
                <Select
                    defaultValue="uk"
                    variant="outlined"
                    sx={{ color: 'white' }}
                >
                    <MenuItem value="uk" onClick={() => dispatch(switchToUk())}>
                        UK
                    </MenuItem>
                    <MenuItem value="en" onClick={() => dispatch(switchToEn())}>
                        EN
                    </MenuItem>
                </Select>
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
            <Navbar />
        </AppBar>
    );
}
