import React from 'react';
import { selectUsersData } from '../common/usersSlice';
import { showSnackbar, hideSnackbar } from '../common/displaySnackbarSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useLoginValidation = (loginDetails) => {
    const [dataDismatch, setDataDismatch] = React.useState(false);
    const usersData = useSelector(selectUsersData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validate = () => {
        const currentUser = usersData.find(
            (user) => user.email === loginDetails.email
        );
        if (currentUser === undefined) {
            return setDataDismatch(true);
        }
        if (currentUser.password === loginDetails.password) {
            localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
            navigate(-1);
            dispatch(showSnackbar());
            setTimeout(() => {
                dispatch(hideSnackbar());
            }, 5000);
        } else {
            setDataDismatch(true);
        }
    }

    return [dataDismatch, validate];
};

export default useLoginValidation;
