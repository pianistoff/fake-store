import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../common/usersSlice';
import { selectUsersData } from '../common/usersSlice';
import LoginContent from './LoginContent';
import Box from '@mui/material/Box';

const Login = () => {
    const usersData = useSelector(selectUsersData);
    const dispatch = useDispatch();

    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: '',
        isAdmin: false,
    });

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = usersData.find(
            (user) => user.email === loginDetails.email
        );
        if (currentUser === undefined) {
            return console.log('error');
        }
        if (currentUser.password === loginDetails.password) {
            localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
            console.log('logged in');
        } else {
            console.log('error');
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
            />
        </Box>
    );
};

export default Login;
