import { createTheme } from '@mui/material/styles';

const lighTheme = createTheme({
  palette: {
    primary: {
      main: '#802c6e',
    },
    secondary: {
      main: '#6e802c',
    },
    mode: 'light',
  },
});

export default lighTheme;
