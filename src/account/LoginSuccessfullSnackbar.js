import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { selectDisplaySnackbar } from '../common/displaySnackbarSlice';

const LoginSuccessfullSnackbar = () => {
    const displaySnackbar = useSelector(selectDisplaySnackbar);

    return (
        <Snackbar open={displaySnackbar} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} >
            <Alert severity="success">You successfully logged in!</Alert>
        </Snackbar>
    );
};

export default LoginSuccessfullSnackbar;
