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

const fontWeights = [300, 400, 600, 700];
[fontWeights.light, fontWeights.normal, fontWeights.semiBold, fontWeights.bold] = fontWeights;

const lineHeights = ['1.25em', '1.5em', '1.75em', '2em'];
[lineHeights.short, lineHeights.normal, lineHeights.tall, lineHeights.double] = lineHeights;

/**
 * Colors
 */
const colors = {
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
    pureWhite: '#FFFFFF'
  }
};

export default {
  breakpoints,
  fonts: {
    normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif'
  },
  borders: ['none', '1px', '2px'],
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii: ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '100%'],
  space: ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px'],
  shadows: [
    'none',
    '0px 8px 12px -12px rgba(0,0,0,0.15)',
    '0px 8px 24px -12px rgba(0,0,0,0.2)',
    '0px 8px 24px 0px rgba(0,0,0,0.15);'
  ],
  mediaQueries,
  variants: {
    typography: {
      heading: {
        h1: {
          color: colors.text.primary,
          fontSize: fontSizes.h1,
          lineHeight: lineHeights.short,
          fontWeight: fontWeights.bold
        },
        h2: {
          color: colors.text.primary,
          fontSize: fontSizes.h2,
          lineHeight: lineHeights.short,
          fontWeight: fontWeights.bold
        },
        h3: {
          color: colors.text.primary,
          fontSize: fontSizes.h3,
          lineHeight: lineHeights.short,
          fontWeight: fontWeights.bold
        },
        h4: {
          color: colors.text.primary,
          fontSize: fontSizes.h4,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.bold
        },
        h5: {
          color: colors.text.primary,
          fontSize: fontSizes.h5,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.bold
        },
        h6: {
          color: colors.text.primary,
          fontSize: fontSizes.h6,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.bold
        }
      }
    }
  }
};
