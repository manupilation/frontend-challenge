import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F5F5F5;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .wines-container {
    display: flex;
    flex-basis: 70%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
 
export default GlobalStyle;