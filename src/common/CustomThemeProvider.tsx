import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { selectThemeMode } from "./userSettingsSlice";

type CustomThemeProviderProps = {
  children: ReactNode;
};

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const themeMode = useSelector(selectThemeMode);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
