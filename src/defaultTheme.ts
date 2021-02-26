export type ThemeScale<Type, Aliases extends string> = Array<Type> & Record<Aliases, Type>;
/**
 * Layout
 */
export type SizeAlias = 'mobile' | 'tablet' | 'desktop';

const sizes = ['32em', '44em', '72em'] as ThemeScale<string, SizeAlias>;
[sizes.mobile, sizes.tablet, sizes.desktop] = sizes;

/**
 * Breakpoints
 */
export type BreakpointAlias = 'mobile' | 'tablet' | 'desktop' | 'widescreen';

const breakpoints = ['32em', '48em', '80em', '120em'] as ThemeScale<string, BreakpointAlias>;
[breakpoints.mobile, breakpoints.tablet, breakpoints.desktop, breakpoints.widescreen] = breakpoints;

/**
 * Media queries
 */
export type MediaQuery = string;
export interface MediaQueries {
  mobile: MediaQuery;
  tablet: MediaQuery;
  desktop: MediaQuery;
  widescreen: MediaQuery;
}

const mediaQueries: MediaQueries = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
  widescreen: `@media screen and (min-width: ${breakpoints.widescreen})`
};

/**
 * Typography
 */
export type Font = string;
export interface Fonts {
  normal: Font;
}
const fonts: Fonts = {
  normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif'
};

export type FontSizeAlias =
  | 'caption'
  | 'sub'
  | 'secondaryBody'
  | 'body'
  | 'h6'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

const fontSizes = [
  '7px',
  '9px',
  '12px',
  '16px',
  '22px',
  '28px',
  '38px',
  '50px',
  '68px',
  '90px'
] as ThemeScale<string, FontSizeAlias>;
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

export type FontWeightAlias = 'light' | 'normal' | 'semiBold' | 'bold';

const fontWeights = [300, 400, 600, 700] as ThemeScale<number, FontWeightAlias>;
[fontWeights.light, fontWeights.normal, fontWeights.semiBold, fontWeights.bold] = fontWeights;

export type LineHeightAlias = 'short' | 'normal' | 'tall' | 'double';

const lineHeights = ['1.25em', '1.5em', '1.75em', '2em'] as ThemeScale<string, LineHeightAlias>;
[lineHeights.short, lineHeights.normal, lineHeights.tall, lineHeights.double] = lineHeights;

/**
 * Colors
 */
const colors = {
  brandDark: '#36424A',
  brandLight: '#0F1210',
  transparent: 'transparent',
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

/**
 * Space
 */
export type Space = string;
const space: Space[] = ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px'];

/**
 * Border
 */
export type BorderWidth = string;
export type BorderRadius = string;
const borders: BorderWidth[] = ['none', '1px', '2px'];
const radii: BorderRadius[] = ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '100%'];

/**
 * Shadows
 */
export type BoxShadow = string;
const shadows: BoxShadow[] = [
  'none',
  '0px 8px 12px -12px rgba(0,0,0,0.15)',
  '0px 8px 24px -12px rgba(0,0,0,0.2)',
  '0px 8px 24px 0px rgba(0,0,0,0.15);'
];

export default {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  mediaQueries,
  radii,
  shadows,
  space
};
