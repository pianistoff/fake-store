import React, { Suspense } from "react";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useSelector } from "react-redux";
import "./footer.css";
import { useTranslation } from "react-i18next";
import "../common/translation"
import { selectDarkMode } from "../common/darkModeSlice";

const Footer = () => {
    const { t } = useTranslation()
    const darkMode = useSelector(selectDarkMode);
    return (
        <Suspense fallback="Loading...">
            <footer
                className="footer"
                style={{ backgroundColor: darkMode ? "#272727" : "#802c6e" }}
            >
                <Typography variant="body1" component="p">
                    {t("copyright")}
                </Typography>
                <div className="footer-right">
                    <IconButton
                        size="large"
                        aria-label="account"
                        color="inherit"
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account"
                        color="inherit"
                    >
                        <InstagramIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account"
                        color="inherit"
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="account"
                        color="inherit"
                    >
                        <PinterestIcon />
                    </IconButton>
                </div>
            </footer>
        </Suspense>
    );
};

export default Footer;
