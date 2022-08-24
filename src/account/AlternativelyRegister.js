import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const AlternativelyRegister = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleRegisterLink = () => {
        navigate('/register');
    }

    return (
        <>
            <Typography variant="button" component="p" textAlign="center">
                {t('newCustomers')}
            </Typography>
            <Button
                variant="outlined"
                className="btn"
                fullWidth
                onClick={handleRegisterLink}
            >
                {t('register')}
            </Button>
        </>
    );
};

export default AlternativelyRegister;
