/**
 * Theme settings
 */
const theme = {} as DefaultTheme;

export default theme;

/**
 * Theme Types
 */
export type ThemeScale<Type, Aliases extends string> = Array<Type> & Record<Aliases, Type>;
export type BorderRadius = string;
export type BorderWidth = string;
export type BoxShadow = string;
export type BreakpointAlias = 'mobile' | 'tablet' | 'desktop' | 'widescreen';
export type Font = string;
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
export type FontWeightAlias = 'light' | 'normal' | 'semiBold' | 'bold';
export type LineHeightAlias = 'short' | 'normal' | 'tall' | 'double';
export type MediaQuery = string;
export type SizeAlias = 'mobile' | 'tablet' | 'desktop';
export type Space = string;

/**
 * Theme Interfaces
 */
export interface DefaultTheme {
  borders: BorderWidth[];
  breakpoints: ThemeScale<string, BreakpointAlias>;
  colors: any;
  fonts: Fonts;
  fontSizes: ThemeScale<string, FontSizeAlias>;
  fontWeights: ThemeScale<number, FontWeightAlias>;
  lineHeights: ThemeScale<string, LineHeightAlias>;
  mediaQueries: MediaQueries;
  radii: BorderRadius[];
  shadows: BoxShadow[];
  sizes: ThemeScale<string, SizeAlias>;
  space: Space[];
}
export interface Fonts {
  normal: Font;
}

export interface MediaQueries {
  mobile: MediaQuery;
  tablet: MediaQuery;
  desktop: MediaQuery;
  widescreen: MediaQuery;
}

/**************************/
/**
 * Layout
 */

theme.sizes = ['32em', '44em', '72em'] as ThemeScale<string, SizeAlias>;
[theme.sizes.mobile, theme.sizes.tablet, theme.sizes.desktop] = theme.sizes;

/**
 * Breakpoints
 */

theme.breakpoints = ['32em', '48em', '80em', '120em'] as ThemeScale<string, BreakpointAlias>;
[
  theme.breakpoints.mobile,
  theme.breakpoints.tablet,
  theme.breakpoints.desktop,
  theme.breakpoints.widescreen
] = theme.breakpoints;

/**
 * Media queries
 */

theme.mediaQueries = {
  mobile: `@media screen and (min-width: ${theme.breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${theme.breakpoints.tablet})`,
  desktop: `@media screen and (min-width: ${theme.breakpoints.desktop})`,
  widescreen: `@media screen and (min-width: ${theme.breakpoints.widescreen})`
};

/**
 * Typography
 */

theme.fonts = {
  normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif'
};

theme.fontSizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem'
] as ThemeScale<string, FontSizeAlias>;
[
  theme.fontSizes.caption,
  theme.fontSizes.secondaryBody,
  theme.fontSizes.body,
  theme.fontSizes.h6,
  theme.fontSizes.h5,
  theme.fontSizes.h4,
  theme.fontSizes.h3,
  theme.fontSizes.h2,
  theme.fontSizes.h1
] = theme.fontSizes;

theme.fontWeights = [300, 400, 600, 700] as ThemeScale<number, FontWeightAlias>;
[
  theme.fontWeights.light,
  theme.fontWeights.normal,
  theme.fontWeights.semiBold,
  theme.fontWeights.bold
] = theme.fontWeights;

theme.lineHeights = ['1.25em', '1.5em', '1.75em', '2em'] as ThemeScale<string, LineHeightAlias>;
[
  theme.lineHeights.short,
  theme.lineHeights.normal,
  theme.lineHeights.tall,
  theme.lineHeights.double
] = theme.lineHeights;

/**
 * Colors
 */
theme.colors = {
  dark: '#36424A',
  light: '#0F1210',
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
theme.space = ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px', '96px'];

/**
 * Border
 */
theme.borders = ['none', '1px', '2px'];
theme.radii = ['0', '4px', '8px', '12px', '16px', '24px', '32px', '48px', '100%'];

/**
 * Shadows
 */
theme.shadows = [
  'none',
  '0px 8px 12px -12px rgba(0,0,0,0.15)',
  '0px 8px 24px -12px rgba(0,0,0,0.2)',
  '0px 8px 24px 0px rgba(0,0,0,0.15);'
];
