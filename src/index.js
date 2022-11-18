import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.scss';
import App from './components/App';

const theme = createTheme({
  palette: {
    primary: { main: '#660510' },

    secondary: {
      main: '#FFF5F3',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
