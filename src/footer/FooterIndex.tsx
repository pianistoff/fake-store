import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import "../common/translation";

import FooterTag from "./FooterTag";

import "./footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="Loading...">
      <FooterTag>
        <Typography variant="body1" component="p">
          {t("copyright")}
        </Typography>
        <div className="footer-right">
          <IconButton size="large" aria-label="account" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton size="large" aria-label="account" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton size="large" aria-label="account" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton size="large" aria-label="account" color="inherit">
            <PinterestIcon />
          </IconButton>
        </div>
      </FooterTag>
    </Suspense>
  );
}

export default Footer;
