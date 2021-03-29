import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './Styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import Routes from './Routes';
import './Styles/reset.scss';
import './Styles/common.scss';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
