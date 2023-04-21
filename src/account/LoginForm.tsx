import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import "../common/translation";
import { LoginDetails } from "../common/types";

type LoginFormProps = {
  loginDetails: LoginDetails;
  setLoginDetails: React.Dispatch<React.SetStateAction<LoginDetails>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function LoginForm({
  loginDetails,
  setLoginDetails,
  handleSubmit,
}: LoginFormProps) {
  const { t } = useTranslation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginDetails((prevLoginDetails) => ({
      ...prevLoginDetails,
      email: e.target.value,
    }));

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginDetails((prevLoginDetails) => ({
      ...prevLoginDetails,
      password: e.target.value,
    }));

  const handleIsAdminChange = () =>
    setLoginDetails((prevLoginDetails) => ({
      ...prevLoginDetails,
      isAdmin: !prevLoginDetails.isAdmin,
    }));

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label={t("email")}
        name="email"
        autoComplete="email"
        type="email"
        onChange={handleEmailChange}
        value={loginDetails.email}
      />
      <TextField
        id="outlined-password-input"
        label={t("password")}
        type="password"
        fullWidth
        required
        autoComplete="current-password"
        onChange={handlePasswordChange}
        value={loginDetails.password}
      />
      <Box display="flex" justifyContent="center">
        <FormControlLabel
          label={t("signInAsAdmin")}
          control={
            <Checkbox
              name="admin"
              checked={loginDetails.isAdmin}
              onChange={handleIsAdminChange}
            />
          }
        />
      </Box>
      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{ marginBottom: "30px" }}
      >
        {t("login")}
      </Button>
    </form>
  );
}

export default LoginForm;
