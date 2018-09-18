// Import project-level dependencies
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

// Global application style component
const GlobalStyle = createGlobalStyle`
  ${/* Normalize application styles */ ''}
  ${normalize()}

  ${/* Base styles */ ''}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    font-size: 62.5%;
    height: 100%;
    user-select: none;
  }

  html,
  body {
    margin: 0;
    line-height: 1;
  }

  body {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primarySans};
    font-size: 160%;
    min-height: 100%;
    min-width: ${({ theme }) => theme.sizes.breakpoints.minWidth};
    overflow-x: hidden;
  }

  h1,
  h2 {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .app {
    margin: 0;

    @media screen and (min-width: ${({ theme }) =>
      theme.sizes.breakpoints.horizontal}) {
      padding: ${({ theme }) => theme.sizes.md};
    }
  }
`;

// Export the GlobalStyle component
export default GlobalStyle;
