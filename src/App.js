import Header from './header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer/Footer';
import RoutesList from './common/RoutesList';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { selectThemeMode } from './common/userSettingsSlice';
import darkTheme from './common/darkTheme';
import lightTheme from './common/lightTheme';

const App = () => {
    const themeMode = useSelector(selectThemeMode);

    return (
        <BrowserRouter>
            <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        justifyContent: 'space-between',
                    }}
                >
                    <Header />
                    <div style={{ padding: '10px' }}>
                        <RoutesList />
                    </div>
                    <Footer />
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
