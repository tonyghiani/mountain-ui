import css, { SystemCssProperties } from '@styled-system/css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  body, h1, h2, h3, h4, h5, h6, p, input, button, select, textarea, ul {
    margin: 0;
    padding: 0;
  }

  input, button, select, textarea {
    font-family: inherit;
    font-size: inherit,
    font-weight: normal;
    color: inherit;
    outline: none;
  }

  button::-moz-focus-inner {
    border-style: none;
  }

  svg {
    vertical-align: middle;
    display: block;
  }

  ul {
    list-style: none;
  }

  a {
    cursor: pointer;
  }
  ${css({
    html: {
      fontSize: ['16px', '18px'],
      fontFamily: 'normal' as SystemCssProperties,
      color: 'text.primary' as SystemCssProperties,
      backgroundColor: 'background.pureWhite' as SystemCssProperties
    },

    'pre, code': {
      fontFamily: 'code' as SystemCssProperties
    }
  })}
`;
