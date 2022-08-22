import React from 'react';
import { useTranslation } from 'react-i18next';
import '../common/translation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useGeoLocation from './useGeoLocation';

const Register = () => {
    const { t } = useTranslation();
    const geoLocation = useGeoLocation();
    const [inputs, setInputs] = React.useState({
        address: {
            geolocation: geoLocation,
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

    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                setInputs((prevInputs) => ({
                    ...prevInputs,
                    address: {
                        ...prevInputs.address,
                        geolocation: {
                            lat: JSON.stringify(location.coords.latitude),
                            long: JSON.stringify(location.coords.longitude),
                        },
                    },
                }));
            });
        }
    }, []);

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
                    <Typography
                        variant="button"
                        component="p"
                        textAlign="center"
                    >
                        {t('newCustomers')}
                    </Typography>
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
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label={t('lastName')}
                        name="lastName"
                        autoComplete="lastName"
                        type="lastName"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label={t('phone')}
                        name="phone"
                        autoComplete="phone"
                        type="phone"
                    />
                    <TextField
                        id="outlined-password-input"
                        label={t('password')}
                        margin="normal"
                        type="password"
                        fullWidth
                        required
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label={t('city')}
                        name="city"
                        autoComplete="city"
                        type="city"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="street"
                        label={t('street')}
                        name="street"
                        autoComplete="street"
                        type="street"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="buildingNumber"
                        label={t('buildingNumber')}
                        name="buildingNumber"
                        autoComplete="buildingNumber"
                        type="buildingNumber"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="zipCode"
                        label={t('zipCode')}
                        name="zipCode"
                        autoComplete="zipCode"
                        type="zipCode"
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ marginBottom: '30px' }}
                    >
                        {t('register')}
                    </Button>
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
