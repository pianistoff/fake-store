import { showSnackbar, hideSnackbar } from '../common/displaySnackbarSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useHandleSuccessfulLogin = (loginDetails) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSuccessfulLogin = () => {
        localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
            navigate(-1);
            dispatch(showSnackbar());
            setTimeout(() => {
                dispatch(hideSnackbar());
            }, 5000);
    }
  return handleSuccessfulLogin;
}

export default useHandleSuccessfulLogin