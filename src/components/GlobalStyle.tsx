import css, { SystemCssProperties } from '@styled-system/css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: ['16px', '18px'],
      fontFamily: 'normal' as SystemCssProperties,
      color: 'text.primary' as SystemCssProperties,
      backgroundColor: 'background.pureWhite' as SystemCssProperties,
      WebkitFontSmoothing: 'antialiased' as SystemCssProperties,
      textRendering: 'optimizeLegibility' as SystemCssProperties,
    },
    body: {
      margin: 0,
    },
    'h1, h2, h3, h4, h5, h6, p': {
      margin: 0,
      padding: 0,
    },
    'pre, code': {
      fontFamily: 'code' as SystemCssProperties,
    },
    'input, button, select, textarea': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'normal',
      color: 'inherit',
      outline: 'none',
      padding: 0,
      margin: 0,
    },
    'button::-moz-focus-inner': {
      borderStyle: 'none',
    },
    'sub, pub': {
      fontSize: 'secondaryBody',
    },
    'b, em': {
      fontWeight: 'semiBold',
    },
    svg: {
      verticalAlign: 'middle',
      display: 'block',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    a: {
      cursor: 'pointer',
    }
  })
);
