import React from "react";
import { useTranslation } from "react-i18next";
import "../common/translation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: { xs: "block", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{ width: { xs: "100%", sm: "50%", md: "40%", lg: "30%" } }}
            >
                <form>
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
                    />
                    <TextField
                        id="outlined-password-input"
                        label={t("password")}
                        type="password"
                        fullWidth
                        required
                        autoComplete="current-password"
                        // sx={{ marginBottom: "10px" }}
                    />
                    <Box display="flex" justifyContent="center"><FormControlLabel label={t("signInAsAdmin")} control={<Checkbox />} /></Box>
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ marginBottom: "30px" }}
                    >
                        {t("login")}
                    </Button>
                </form>
                <Typography variant="button" component="p" textAlign="center">
                    {t("newCustomers")}
                </Typography>
                <Button variant="outlined" className="btn" fullWidth>
                    {t("register")}
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
