import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CategoriesNavigation from "./CategoriesNavigation";
import LanguageDropdown from "./LanguageDropdown";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", marginRight: "auto" }}>
          <Typography variant="h6" component="h1" color="white">
            FAKE STORE
          </Typography>
        </Link>
        <LanguageDropdown />
        <ThemeButton />
        <IconButton size="large" aria-label="cart" color="inherit">
          <Link to="/cart" style={{ color: "white" }}>
            <ShoppingCartIcon />
          </Link>
        </IconButton>
        <IconButton size="large" aria-label="account" color="inherit">
          <Link to="/login" style={{ color: "white" }}>
            <AccountCircleIcon />
          </Link>
        </IconButton>
      </Toolbar>
      <CategoriesNavigation />
    </AppBar>
  );
}
