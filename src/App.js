import Header from "./header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./products/Products";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import Users from "./users/Users";
import Login from "./account/Login";
import Register from "./account/Register";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { selectDarkMode } from "./common/darkModeSlice";

const App = () => {
    const darkMode = useSelector(selectDarkMode);
    const mode = darkMode ? "dark" : "light";
    const theme = createTheme({
        palette: {
            primary: {
                main: "#802c6e",
            },
            secondary: {
                main: "#6e802c",
            },
            mode: mode,
        },
    });
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        justifyContent: "space-between",
                    }}
                >
                    <Header />
                    <div style={{ padding: "10px" }}>
                        <Routes>
                            <Route path="/" element={<Products />} />
                            <Route path="/product/:id" element={<Product />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" elements={<Register />} />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </div>
                    <Footer />
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
