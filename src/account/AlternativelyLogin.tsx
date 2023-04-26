import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AlternativelyLogin() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLoginLink = () => {
    navigate("/login");
  };

  return (
    <>
      <Typography variant="button" component="p" textAlign="center">
        {t("existingCustomers")}
      </Typography>
      <Button
        variant="outlined"
        className="btn"
        fullWidth
        onClick={handleLoginLink}
      >
        {t("login")}
      </Button>
    </>
  );
}

export default AlternativelyLogin;
