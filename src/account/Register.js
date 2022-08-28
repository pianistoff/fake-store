import React from 'react';
import { useTranslation } from 'react-i18next';
import '../common/translation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AlternativelyLogin from './AlternativelyLogin';

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

    const handleEmail = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            email: e.target.value,
        }));
    };

    const handleUsername = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            username: e.target.value,
        }));
    };

    const handleFirstName = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            name: {
                ...prevInputs.name,
                firstname: e.target.value,
            },
        }));
    };

    const handleLastName = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            name: {
                ...prevInputs.name,
                lastname: e.target.value,
            },
        }));
    };

    const handlePassword = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            password: e.target.value,
        }));
    };

    const handleCity = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            address: {
                ...prevInputs.address,
                city: e.target.value,
            },
        }));
    };

    const handleStreet = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            address: {
                ...prevInputs.address,
                street: e.target.value,
            },
        }));
    };

    const handleBuildingNumber = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            address: {
                ...prevInputs.address,
                number: e.target.value,
            },
        }));
    };

    const handleZipCode = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            address: {
                ...prevInputs.address,
                zipcode: e.target.value,
            },
        }));
    };

    const handlePhone = (e) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            phone: e.target.value,
        }));
    };

    const handleSubmit = (e) => {};

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
                        label={t('email')}
                        autoComplete="email"
                        type="email"
                        onChange={handleEmail}
                        value={inputs.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('username')}
                        autoComplete="username"
                        type="text"
                        onChange={handleUsername}
                        value={inputs.username}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('firstName')}
                        autoComplete="given-name"
                        type="text"
                        onChange={handleFirstName}
                        value={inputs.name.firstname}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('lastName')}
                        autoComplete="family-name"
                        type="text"
                        onChange={handleLastName}
                        value={inputs.name.lastname}
                    />
                    <TextField
                        label={t('password')}
                        margin="normal"
                        type="password"
                        fullWidth
                        required
                        autoComplete="new-password"
                        onChange={handlePassword}
                        value={inputs.password}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('city')}
                        autoComplete="address-level12"
                        type="text"
                        onChange={handleCity}
                        value={inputs.address.city}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('street')}
                        type="text"
                        onChange={handleStreet}
                        value={inputs.address.street}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('buildingNumber')}
                        type="text"
                        onChange={handleBuildingNumber}
                        value={inputs.address.number}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('zipCode')}
                        autoComplete="postal-code"
                        type="text"
                        onChange={handleZipCode}
                        value={inputs.address.zipcode}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={t('phone')}
                        autoComplete="tel"
                        type="tel"
                        onChange={handlePhone}
                        value={inputs.phone}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ marginBottom: '30px' }}
                    >
                        {t('register')}
                    </Button>
                    <AlternativelyLogin />
                </form>
            </Box>
        </Box>
    );
};

export default Register;
