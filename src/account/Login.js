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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../common/usersSlice';
import { selectUsersStatus, selectUsersData } from '../common/usersSlice';

const Login = () => {
    const { t } = useTranslation();
    const usersStatus = useSelector(selectUsersStatus);
    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();

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
                {usersStatus === 'failed' && <Alert severity="error">{t('networkError')}</Alert>
}
                <form>
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
                        id="outlined-password-input"
                        label={t('password')}
                        type="password"
                        fullWidth
                        required
                        autoComplete="current-password"
                        // sx={{ marginBottom: "10px" }}
                    />
                    <Box display="flex" justifyContent="center">
                        <FormControlLabel
                            label={t('signInAsAdmin')}
                            control={<Checkbox />}
                        />
                    </Box>
                    <LoadingButton
                        variant="contained"
                        type="submit"
                        loading={usersStatus === 'loading' ? true : false}
                        fullWidth
                        sx={{ marginBottom: '30px' }}
                        onClick={() => {
                            dispatch(fetchUsers());
                        }}
                    >
                        {t('login')}
                    </LoadingButton>
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
        </Box>
    );
};

export default Login;
