import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { selectDisplaySnackbar } from '../common/displaySnackbarSlice';
import { useTranslation } from 'react-i18next';

const LoginSuccessfullSnackbar = () => {
    const displaySnackbar = useSelector(selectDisplaySnackbar);
    const { t } = useTranslation();

    return (
        <Snackbar open={displaySnackbar} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} >
            <Alert severity="success">{t('successfulLogin')}</Alert>
        </Snackbar>
    );
};

export default LoginSuccessfullSnackbar;
