import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsersStatus } from '../common/usersSlice';
import { useTranslation } from 'react-i18next';
import '../common/translation';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import LoginForm from './LoginForm';


const LoginContent = ({ loginDetails, setLoginDetails, handleSubmit }) => {
    const { t } = useTranslation();
    const usersStatus = useSelector(selectUsersStatus);

    let content;
    if (usersStatus === null || usersStatus === 'loading') {
        content = <CircularProgress color='primary' />;
    } else if (usersStatus === 'failed') {
        content = <Alert severity="error">{t('networkError')}</Alert>;
    } else if (usersStatus === 'success') {
        content = <LoginForm loginDetails={loginDetails} setLoginDetails={setLoginDetails} handleSubmit={handleSubmit} />
    }

    return content;
};

export default LoginContent;
