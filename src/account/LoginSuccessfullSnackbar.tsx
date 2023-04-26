import { useTranslation } from "react-i18next";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { selectDisplaySnackbar } from "../common/displaySnackbarSlice";
import { useAppSelector } from "../common/storeHooks";

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
