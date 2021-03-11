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
export type FontScale = number;
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
export type FontWeightAlias = 'light' | 'normal' | 'semiBold' | 'bold' | 'ultraBold';
export type LineHeightAlias = 'short' | 'normal' | 'tall' | 'double';
export type MediaQuery = string;
export type Space = string;

/**
 * Theme Interfaces
 */
export interface DefaultTheme {
  borders: BorderWidth[];
  breakpoints: ThemeScale<string, BreakpointAlias>;
  colors: any;
  fonts: Fonts;
  fontScale: FontScale;
  fontSizes: ThemeScale<string, FontSizeAlias>;
  fontWeights: ThemeScale<number, FontWeightAlias>;
  lineHeights: ThemeScale<string, LineHeightAlias>;
  mediaQueries: MediaQueries;
  radii: BorderRadius[];
  shadows: BoxShadow[];
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

theme.fontScale = 1.25;

theme.fontSizes = [
  `${Math.round(theme.fontScale ** -2 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** -1 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 0 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 1 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 2 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 3 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 4 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 5 * 10) / 10}rem`,
  `${Math.round(theme.fontScale ** 6 * 10) / 10}rem`
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

theme.fontWeights = [300, 400, 600, 700, 900] as ThemeScale<number, FontWeightAlias>;
[
  theme.fontWeights.light,
  theme.fontWeights.normal,
  theme.fontWeights.semiBold,
  theme.fontWeights.bold,
  theme.fontWeights.ultraBold
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
theme.colors = {};
theme.colors.dark = '#36424A';
theme.colors.light = '#FDFDFD';
theme.colors.transparent = 'transparent';
theme.colors = {
  ...theme.colors,
  text: {
    primary: '#0C0E0D',
    secondary: '#6E7A83',
    caption: '#5F6661',
    light: theme.colors.light
  },
  accent: {
    primary: {
      dark: '#2461BC',
      normal: '#3F81E5',
      light: '#86B5FB'
    }
  },
  background: {
    primary: theme.colors.light
  },
  feeling: {
    success: {
      dark: '#12D04B',
      light: '#A1ECB7',
      normal: '#1CDA55'
    },
    warning: {
      dark: '#F5BA3B',
      light: '#FFDC91',
      normal: '#FFC445'
    },
    error: {
      dark: '#ED4343',
      light: '#FF7C7C',
      normal: '#F74D4D'
    }
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
