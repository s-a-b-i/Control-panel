import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { darkTheme, lightTheme } from './theme'; // Named imports
import { ThemeProvider, CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isDarkMode = false; // Or however you determine the theme mode

root.render(
  <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
