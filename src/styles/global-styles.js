const { createGlobalStyle } = require('styled-components');

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: yellow;
  }
`;