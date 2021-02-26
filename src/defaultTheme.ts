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
export type FontScaleAlias = 'majorSecond' | 'minorThird' | 'majorThird' | 'perfectFourth';
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
  fontScales: ThemeScale<string, FontScaleAlias>;
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

theme.fontScales = ['1.125', '1.2', '1.25', '1.333'] as ThemeScale<string, FontScaleAlias>;
[
  theme.fontScales.majorSecond,
  theme.fontScales.minorThird,
  theme.fontScales.majorThird,
  theme.fontScales.perfectFourth
] = theme.fontScales;

theme.fontSizes = [
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: -3 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: -2 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: -1 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 0 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 1 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 2 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 3 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 4 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 5 }),
  calcScaleStr({ fontSize: 'var(--font-base)', fontScale: 'var(--font-scale)', step: 6 })
] as ThemeScale<string, FontSizeAlias>;
[
  theme.fontSizes.caption,
  theme.fontSizes.sub,
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

function calcScaleStr({
  fontSize,
  fontScale,
  step
}: {
  fontSize: string;
  fontScale: string;
  step: number;
}): string {
  const sign = step >= 0 ? ' * ' : ' / ';

  return `calc(${[fontSize, Array(Math.abs(step)).fill(fontScale).join(sign)]
    .filter(Boolean)
    .join(sign)})`;
}
