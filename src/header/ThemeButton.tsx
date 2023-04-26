import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";

import {
  selectThemeMode,
  switchToDark,
  switchToLight,
} from "../common/userSettingsSlice";

function ThemeButton() {
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    if (themeMode === "light") {
      dispatch(switchToDark());
    } else if (themeMode === "dark") {
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
      {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}

export default ThemeButton;
