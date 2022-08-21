import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import '../common/translation';

const LoginForm = ({
    loginDetails,
    setLoginDetails,
    handleSubmit,
    dataDismatch,
}) => {
    const { t } = useTranslation();

    const handleEmailChange = (e) =>
        setLoginDetails((prevLoginDetails) => ({
            ...prevLoginDetails,
            email: e.target.value,
        }));

    const handlePasswordChange = (e) =>
        setLoginDetails((prevLoginDetails) => ({
            ...prevLoginDetails,
            password: e.target.value,
        }));

    const handleIsAdminChange = () =>
        setLoginDetails((prevLoginDetails) => ({
            ...prevLoginDetails,
            isAdmin: !prevLoginDetails.isAdmin,
        }));

    return (
        <Box
            sx={{
                width: { xs: '100%', sm: '50%', md: '40%', lg: '30%' },
            }}
        >
            {dataDismatch && (
                <Alert severity="error" style={{ marginBottom: '20px' }}>
                    {t('loginDataDismatch')}
                </Alert>
            )}
            <Typography variant="button" component="p" textAlign="center">
                {t('currentCustomers')}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={t('email')}
                    name="email"
                    autoComplete="email"
                    type="email"
                    onChange={handleEmailChange}
                    value={loginDetails.email}
                />
                <TextField
                    id="outlined-password-input"
                    label={t('password')}
                    type="password"
                    fullWidth
                    required
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                    value={loginDetails.password}
                />
                <Box display="flex" justifyContent="center">
                    <FormControlLabel
                        label={t('signInAsAdmin')}
                        control={
                            <Checkbox
                                name="admin"
                                checked={loginDetails.isAdmin}
                                onChange={handleIsAdminChange}
                            />
                        }
                    />
                </Box>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ marginBottom: '30px' }}
                >
                    {t('login')}
                </Button>
            </form>
            <Typography variant="button" component="p" textAlign="center">
                {t('newCustomers')}
            </Typography>
            <Button variant="outlined" className="btn" fullWidth>
                <Link
                    to="/register"
                    style={{ color: '#802c6e', textDecoration: 'none' }}
                >
                    {t('register')}
                </Link>
            </Button>
        </Box>
    );
};

export default LoginForm;
