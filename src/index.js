// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#eeeeee',
      trim: '#753742',
      contrastText: grey[900],
      background: {
        default: '#FFFFFF',
        paper: '#eeeeee',
      },
    },
    secondary: {
      main: '#515A47',
      dark: '#383e31',
      trim: '#5CAB7D',
      contrastText: grey[800],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

export default theme;