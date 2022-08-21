import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../common/usersSlice';
import { selectUsersData } from '../common/usersSlice';
import LoginContent from './LoginContent';
import Box from '@mui/material/Box';
import { show, hide } from '../common/displaySnackbarSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            dispatch(show());
            setTimeout(() => {
                dispatch(hide());
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
            <LoginContent
                loginDetails={loginDetails}
                setLoginDetails={setLoginDetails}
                handleSubmit={handleSubmit}
                dataDismatch={dataDismatch}
            />
        </Box>
    );
};

export default Login;
