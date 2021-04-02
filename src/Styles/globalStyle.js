import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*{
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Nanum Gothic', 'Malgun Gothic', sans-serif;
  box-sizing: border-box;
}

button:hover{
  cursor: pointer;
}
`;

export default GlobalStyle;
