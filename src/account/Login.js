import React from 'react';
import { useTranslation } from 'react-i18next';
import '../common/translation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../common/usersSlice';
import { selectUsersStatus, selectUsersData } from '../common/usersSlice';

const Login = () => {
    const { t } = useTranslation();
    const usersStatus = useSelector(selectUsersStatus);
    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [admin, setAdmin] = React.useState(false);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleSubmit = () => {};

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {usersStatus === null || usersStatus === 'loading' ? (
                <CircularProgress color="primary" />
            ) : (
                <Box
                    sx={{
                        width: { xs: '100%', sm: '50%', md: '40%', lg: '30%' },
                    }}
                >
                    {usersStatus === 'failed' && (
                        <Alert severity="error">{t('networkError')}</Alert>
                    )}
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
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            id="outlined-password-input"
                            label={t('password')}
                            type="password"
                            fullWidth
                            required
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Box display="flex" justifyContent="center">
                            <FormControlLabel
                                label={t('signInAsAdmin')}
                                control={
                                    <Checkbox
                                        name="admin"
                                        checked={admin}
                                        onChange={(e) => setAdmin(!admin)}
                                    />
                                }
                            />
                        </Box>
                        <LoadingButton
                            variant="contained"
                            type="submit"
                            loading={usersStatus === 'loading' ? true : false}
                            fullWidth
                            sx={{ marginBottom: '30px' }}
                        >
                            {t('login')}
                        </LoadingButton>
                    </form>
                    <Typography
                        variant="button"
                        component="p"
                        textAlign="center"
                    >
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
            )}
        </Box>
    );
};

export default Login;
