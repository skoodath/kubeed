import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  line-height: 1.6;
  scroll-behavior: smooth;
  font-size: 14px;
  color: #063347;
}

body {
  font-family: Raleway, sans-serif;
  background-color: #ffffff;
}
`;

export default GlobalStyle;