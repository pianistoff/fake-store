import React from "react";
import { useTranslation } from "react-i18next";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "../common/storeHooks";
import { fetchUsers, selectUsersStatus } from "../common/usersSlice";

import AlternativelyRegister from "./AlternativelyRegister";
import LoginForm from "./LoginForm";
import useHandleSuccessfulLogin from "./useHandleSuccessfulLogin";
import useLoginValidation from "./useLoginValidation";

function LoginIndex() {
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    password: "",
    isAdmin: false,
  });
  const usersStatus = useAppSelector(selectUsersStatus);
  const dispatch = useAppDispatch();
  const { loginStatus, validate } = useLoginValidation(loginDetails);
  const handleSuccessfulLogin = useHandleSuccessfulLogin(loginDetails);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  React.useEffect(() => {
    if (loginStatus === "logged in") {
      handleSuccessfulLogin();
    }
  }, [loginStatus, handleSuccessfulLogin]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {usersStatus === null ||
        (usersStatus === "loading" && <CircularProgress color="primary" />)}
      {usersStatus === "failed" && (
        <Alert severity="error">{t("networkError")}</Alert>
      )}
      {usersStatus === "success" && (
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%", lg: "30%" },
          }}
        >
          {loginStatus === "data dismatch" && (
            <Alert severity="error" style={{ marginBottom: "20px" }}>
              {t("loginDataDismatch")}
            </Alert>
          )}
          <Typography variant="button" component="p" textAlign="center">
            {t("currentCustomers")}
          </Typography>
          <LoginForm
            loginDetails={loginDetails}
            setLoginDetails={setLoginDetails}
            handleSubmit={handleSubmit}
          />
          <AlternativelyRegister />
        </Box>
      )}
    </Box>
  );
}

export default LoginIndex;
