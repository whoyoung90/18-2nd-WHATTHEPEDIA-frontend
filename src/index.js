import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Styles/globalStyle';
import theme from './Styles/theme';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
