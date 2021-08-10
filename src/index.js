import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#457b9d',
    },
    secondary: {
      main: '#EBEBEB',
    },
    title: {
      main: "#FFF"
    },
    text: {
      main: "#4d4d4d"
    },
    error: {
      main: "#db0000"
    }
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
);