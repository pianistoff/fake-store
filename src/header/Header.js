import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "./Navbar";
import { switchToDark, switchToLight } from "../common/darkModeSlice";
import { switchToEn, switchToUk } from "../common/langSlice";
import { useSelector, useDispatch } from "react-redux";
import i18n from "i18next";
import { selectDarkMode } from "../common/darkModeSlice";
import { selectLang } from "../common/langSlice";

export default function ButtonAppBar() {
    const darkMode = useSelector(selectDarkMode);
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();

    React.useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    const toggleMode = () => {
        darkMode ? dispatch(switchToLight()) : dispatch(switchToDark());
    };

    const changeLang = (event) => {
        if (event.target.value === "uk") {
            dispatch(switchToUk());
        } else if (event.target.value === "en") {
            dispatch(switchToEn());
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                    FAKE STORE
                </Typography>
                <Select
                    onChange={changeLang}
                    defaultValue="uk"
                    variant="outlined"
                    sx={{ color: "white" }}
                >
                    <MenuItem value="uk">UK</MenuItem>
                    <MenuItem value="en">EN</MenuItem>
                </Select>
                <IconButton
                    size="large"
                    aria-label="mode"
                    color="inherit"
                    onClick={toggleMode}
                >
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="cart"
                    color="inherit"
                    href="/cart"
                >
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="account"
                    color="inherit"
                    href="/login"
                >
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Navbar />
        </AppBar>
    );
}
