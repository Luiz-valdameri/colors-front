import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#457b9d',
    },
    secondary: {
      main: '#9f6fd7',
    }
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
);