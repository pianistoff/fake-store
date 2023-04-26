import { useNavigate } from "react-router-dom";

import { hideSnackbar, showSnackbar } from "../common/displaySnackbarSlice";
import { useAppDispatch } from "../common/storeHooks";
import { LoginDetails } from "../common/types";

const useHandleSuccessfulLogin = (loginDetails: LoginDetails) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSuccessfulLogin = () => {
    localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
    navigate(-1);
    dispatch(showSnackbar());
    setTimeout(() => {
      dispatch(hideSnackbar());
    }, 5000);
  };
  return handleSuccessfulLogin;
};

export default useHandleSuccessfulLogin;
