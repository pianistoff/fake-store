import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAppSelector } from "../common/storeHooks";
import { useTranslation } from "react-i18next";
import { selectDisplaySnackbar } from "../common/displaySnackbarSlice";

function LoginSuccessfullSnackbar() {
  const displaySnackbar = useAppSelector(selectDisplaySnackbar);
  const { t } = useTranslation();

  return (
    <Snackbar
      open={displaySnackbar}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Alert severity="success">{t("successfulLogin")}</Alert>
    </Snackbar>
  );
}

export default LoginSuccessfullSnackbar;
