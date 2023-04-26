import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import i18n from "i18next";

import {
  selectLanguage,
  switchToEn,
  switchToUk,
} from "../common/userSettingsSlice";

function LanguageDropdown() {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Select defaultValue="uk" variant="outlined" sx={{ color: "white" }}>
      <MenuItem value="uk" onClick={() => dispatch(switchToUk())}>
        UK
      </MenuItem>
      <MenuItem value="en" onClick={() => dispatch(switchToEn())}>
        EN
      </MenuItem>
    </Select>
  );
}

export default LanguageDropdown;
