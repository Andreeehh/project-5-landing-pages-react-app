const { createGlobalStyle, css } = require('styled-components');

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${({ theme }) => {
      return css`
        background: ${theme.colors.mainBg};
      `;
    }}
  }
`;
