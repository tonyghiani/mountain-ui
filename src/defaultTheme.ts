/**
 * Breakpoints
 */
const breakpoints = ['32em', '48em', '80em', '120em'];
[breakpoints.mobile, breakpoints.tablet, breakpoints.desktop, breakpoints.widescreen] = breakpoints;

/**
 * Media queries
 */
const mediaQueries = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
  widescreen: `@media screen and (min-width: ${breakpoints.widescreen})`
};

/**
 * Typography
 */
const fontSizes = ['7px', '9px', '12px', '16px', '22px', '28px', '38px', '50px', '68px', '90px'];
[
  fontSizes.caption,
  fontSizes.sub,
  fontSizes.secondaryBody,
  fontSizes.body,
  fontSizes.h6,
  fontSizes.h5,
  fontSizes.h4,
  fontSizes.h3,
  fontSizes.h2,
  fontSizes.h1
] = fontSizes;

export default {
  breakpoints,
  fonts: {
    normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif'
  },
  borders: ['none', '1px', '2px'],
  colors: {
    brandDark: '#36424A',
    brandLight: '#0F1210',
    nightgraph: '#AED8E5',
    text: {
      primary: '#0C0E0D',
      secondary: '#6E7A83',
      caption: '#5F6661'
    },
    accent: {
      shape: '#3B88FD',
      text: '#9BC5FC'
    },
    background: {
      pureWhite: '#FFFFFF',
      spaceWhite: '#FAFAFA',
      grainsboro: '#F4F4F4',
      smokeWhite: '#F7F7F7',
      snow: '#F9F9F9',
      mercury: '#E2E4E5',
      night: '#1A1D1F',
      lightBlue: '#B5DDE8',
      positive: '#86D9C536',
      temporary: '#fbb86d36',
      negative: '#ef8b8b36',
      moscow: 'rgba(168, 200, 254, 0.5)'
    },
    feeling: {
      positive: '#86D9C5',
      temporary: '#FBB86D',
      negative: '#EF8B8B',
      neutral: '#6E7A83'
    },
    support: {
      manchester: '#FA8499',
      marseille: '#9EDCF6',
      miami: '#89EBDD',
      marrakesh: '#FAC496',
      moscow: '#A8C8FE',
      mannheim: '#7E97A8'
    }
  },
  fontSizes,
  lineHeights: ['12px', '18px', '24px', '36px', '48px', '72px', '96px'],
  radii: ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '100%'],
  space: ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px'],
  shadows: [
    'none',
    '0px 8px 12px -12px rgba(0,0,0,0.15)',
    '0px 8px 24px -12px rgba(0,0,0,0.2)',
    '0px 8px 24px 0px rgba(0,0,0,0.15);'
  ],
  mediaQueries
};
