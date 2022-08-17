import React from 'react';
import i18n from 'i18next';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { switchToEn, switchToUk } from '../common/userSettingsSlice';
import { selectLanguage } from './../common/userSettingsSlice';
import { useSelector, useDispatch } from 'react-redux';

const LanguageDropdown = () => {
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    React.useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <Select defaultValue="uk" variant="outlined" sx={{ color: 'white' }}>
            <MenuItem value="uk" onClick={() => dispatch(switchToUk())}>
                UK
            </MenuItem>
            <MenuItem value="en" onClick={() => dispatch(switchToEn())}>
                EN
            </MenuItem>
        </Select>
    );
};

export default LanguageDropdown;
