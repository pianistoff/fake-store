import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../common/usersSlice';
import { selectUsersData } from '../common/usersSlice';
import LoginForm from './LoginForm';
import Box from '@mui/material/Box';
import { showSnackbar, hideSnackbar } from '../common/displaySnackbarSlice';
import { useNavigate } from 'react-router-dom';
import AlternativelyRegister from './AlternativelyRegister';
import { selectUsersStatus } from '../common/usersSlice';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

const LoginIndex = () => {
    const usersData = useSelector(selectUsersData);
    const usersStatus = useSelector(selectUsersStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: '',
        isAdmin: false,
    });

    const [dataDismatch, setDataDismatch] = React.useState(false);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = usersData.find(
            (user) => user.email === loginDetails.email
        );
        if (currentUser === undefined) {
            return setDataDismatch(true);
        }
        if (currentUser.password === loginDetails.password) {
            localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
            navigate(-1);
            dispatch(showSnackbar());
            setTimeout(() => {
                dispatch(hideSnackbar());
            }, 5000);
        } else {
            setDataDismatch(true);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <>
                {usersStatus === null ||
                    (usersStatus === 'loading' && (
                        <CircularProgress color="primary" />
                    ))}
                {usersStatus === 'failed' && (
                    <Alert severity="error">{t('networkError')}</Alert>
                )}
                {usersStatus === 'success' && (
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '50%',
                                md: '40%',
                                lg: '30%',
                            },
                        }}
                    >
                        {dataDismatch && (
                            <Alert
                                severity="error"
                                style={{ marginBottom: '20px' }}
                            >
                                {t('loginDataDismatch')}
                            </Alert>
                        )}
                        <Typography
                            variant="button"
                            component="p"
                            textAlign="center"
                        >
                            {t('currentCustomers')}
                        </Typography>
                        <LoginForm
                            loginDetails={loginDetails}
                            setLoginDetails={setLoginDetails}
                            handleSubmit={handleSubmit}
                        />
                        <AlternativelyRegister />
                    </Box>
                )}
            </>
        </Box>
    );
};

export default LoginIndex;
