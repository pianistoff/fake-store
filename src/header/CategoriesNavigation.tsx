import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./navbar.css";

function CategoriesNavigation() {
  const { t } = useTranslation();

  return (
    <nav>
      <Button variant="text">
        <Typography color="white" variant="body1" component="p">
          {t("electronics").toUpperCase()}
        </Typography>
      </Button>
      <Button variant="text">
        <Typography color="white" variant="body1" component="p">
          {t("jewelery").toUpperCase()}
        </Typography>
      </Button>
      <Button variant="text">
        <Typography color="white" variant="body1" component="p">
          {t("men's clothing").toUpperCase()}
        </Typography>
      </Button>
      <Button variant="text">
        <Typography color="white" variant="body1" component="p">
          {t("women's clothing").toUpperCase()}
        </Typography>
      </Button>
    </nav>
  );
}

export default CategoriesNavigation;
