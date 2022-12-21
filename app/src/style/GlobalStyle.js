import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
