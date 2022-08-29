import React from 'react';
import { selectUsersData } from '../common/usersSlice';
import { useSelector } from 'react-redux';

const useLoginValidation = (loginDetails) => {
    const [loginStatus, setLoginStatus] = React.useState('');
    const usersData = useSelector(selectUsersData);

    const validate = () => {
        const currentUser = usersData.find(
            (user) => user.email === loginDetails.email
        );
        if (currentUser === undefined) {
            setLoginStatus('data dismatch');
            return;
        }
        if (currentUser.password === loginDetails.password) {
            setLoginStatus('logged in')
        } else {
            setLoginStatus('data dismatch');
        }
    }

    return [loginStatus, validate];
};

export default useLoginValidation;
