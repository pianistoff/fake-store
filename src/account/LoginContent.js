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
    dataDismatch,
}) => {
    const { t } = useTranslation();
    const usersStatus = useSelector(selectUsersStatus);

    return (
        <>
            {usersStatus === null ||
                (usersStatus === 'loading' && (
                    <CircularProgress color="primary" />
                ))}
            {usersStatus === 'failed' && (
                <Alert severity="error">{t('networkError')}</Alert>
            )}
            {usersStatus === 'success' && (
                <LoginForm
                    loginDetails={loginDetails}
                    setLoginDetails={setLoginDetails}
                    handleSubmit={handleSubmit}
                    dataDismatch={dataDismatch}
                />
            )}
        </>
    );
};

export default LoginContent;
