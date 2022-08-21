import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsersStatus } from '../common/usersSlice';
import { useTranslation } from 'react-i18next';
import '../common/translation';
import CircularProgress from '@mui/material/CircularProgress';
import LoginForm from './LoginForm';
import Alert from '@mui/material/Alert';

const LoginContent = ({
    loginDetails,
    setLoginDetails,
    handleSubmit,
    dataDismatch
}) => {
    const { t } = useTranslation();
    const usersStatus = useSelector(selectUsersStatus);

    let content;
    if (usersStatus === null || usersStatus === 'loading') {
        content = <CircularProgress color="primary" />;
    } else if (usersStatus === 'failed') {
        content = <Alert severity="error">{t('networkError')}</Alert>;
    } else if (usersStatus === 'success') {
        content = (
            <LoginForm
                loginDetails={loginDetails}
                setLoginDetails={setLoginDetails}
                handleSubmit={handleSubmit}
                dataDismatch={dataDismatch}
            />
        );
    }

    return content;
};

export default LoginContent;
