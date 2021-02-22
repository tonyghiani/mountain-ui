import css from '@styled-system/css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: 'body',
      fontFamily: 'normal',
      color: 'text.primary',
      backgroundColor: 'background.pureWhite',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      WebkitTapHighlightColor: 'brandLight',
      WebkitOverflowSrolling: 'touch',
    },
    body: {
      margin: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
      padding: 0,
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
      fontSize: '0.8em',
    },
    sub: {
      bottom: '-0.2em',
    },
    sup: {
      top: '0.2em',
    },
    'b, em': {
      fontWeight: '700',
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
      textDecoration: 'none',
      cursor: 'pointer',
    },
  }),
  {
    html: { lineHeight: 1.5 },
  }
);
