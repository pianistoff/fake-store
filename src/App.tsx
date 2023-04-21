import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./header/Header";
import Footer from "./footer/FooterIndex";
import RoutesList from "./common/RoutesList";
import LoginSuccessfullSnackbar from "./account/LoginSuccessfullSnackbar";
import CustomThemeProvider from "./common/CustomThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
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
            <RoutesList />
          </div>
          <LoginSuccessfullSnackbar />
          <Footer />
        </Box>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
