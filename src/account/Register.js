import React from 'react';
import { useTranslation } from 'react-i18next';
import '../common/translation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Register = () => {
    const { t } = useTranslation();
    const [inputs, setInputs] = React.useState({
        address: {
            geolocation: {
                lat: '',
                long: '',
            },
            city: '',
            street: '',
            number: 0,
            zipcode: '',
        },
        id: 0,
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: '',
        },
        phone: '',
    });

    const handleSubmit = () => {};

    return (
        <Box
            sx={{
                display: { xs: 'block', sm: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{ width: { xs: '100%', sm: '50%', md: '40%', lg: '30%' } }}
            >
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={t('username')}
                        name="username"
                        autoComplete="username"
                        type="username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label={t('firstName')}
                        name="firstName"
                        autoComplete="firstName"
                        type="firstName"
                    />
                    <TextField
                        id="outlined-password-input"
                        label={t('password')}
                        type="password"
                        fullWidth
                        required
                        autoComplete="current-password"
                    />
                    <LoadingButton
                        variant="contained"
                        type="submit"
                        loading={false}
                        fullWidth
                        sx={{ marginBottom: '30px' }}
                    >
                        {t('login')}
                    </LoadingButton>
                </form>
                <Typography variant="button" component="p" textAlign="center">
                    {t('existingCustomers')}
                </Typography>
                <Button variant="outlined" className="btn" fullWidth>
                    <Link
                        to="/register"
                        style={{ color: '#802c6e', textDecoration: 'none' }}
                    >
                        {t('login')}
                    </Link>
                </Button>
            </Box>
        </Box>
    );
};

export default Register;
