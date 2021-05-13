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
export type BreakpointAlias = 'mobile' | 'tablet' | 'desktop';
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
  borders?: BorderWidth[];
  breakpoints?: ThemeScale<string, BreakpointAlias>;
  colors?: any;
  fonts?: Fonts;
  fontScale?: FontScale;
  fontSizes?: ThemeScale<string, FontSizeAlias>;
  fontWeights?: ThemeScale<number, FontWeightAlias>;
  lineHeights?: ThemeScale<string, LineHeightAlias>;
  mediaQueries?: MediaQueries;
  radii?: BorderRadius[];
  shadows?: BoxShadow[];
  space?: Space[];
  [key: string]: any;
}
export interface Fonts {
  normal: Font;
  code: Font;
}

export interface MediaQueries {
  mobile: MediaQuery;
  tablet: MediaQuery;
  desktop: MediaQuery;
}

/**************************/

/**
 * Breakpoints
 */
const breakpoints = [512, 768, 1280] as ThemeScale<number, BreakpointAlias>;
[breakpoints.mobile, breakpoints.tablet, breakpoints.desktop] = breakpoints;
theme.breakpoints = breakpoints.map(el => el + 'px') as ThemeScale<string, BreakpointAlias>;
[theme.breakpoints.mobile, theme.breakpoints.tablet, theme.breakpoints.desktop] = theme.breakpoints;

/**
 * Media queries
 */

theme.mediaQueries = {
  mobile: `screen and (min-width: 0px) and (max-width: ${breakpoints.mobile - 1}px)`,
  tablet: `screen and (min-width: ${breakpoints.mobile}px) and (max-width: ${
    breakpoints.tablet - 1
  }px)`,
  desktop: `screen and (min-width: ${breakpoints.tablet}px)`
};

/**
 * Typography
 */

theme.fonts = {
  normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif',
  code: "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace"
};

theme.fontScale = 1.2;

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

theme.fontWeights = [300, 400, 500, 700, 900] as ThemeScale<number, FontWeightAlias>;
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
theme.colors = {
  transparent: 'var(--c-transparent, transparent)',
  text: {
    primary: 'var(--c-text-primary, #161A1E)',
    secondary: 'var(--c-text-secondary, #868786)',
    caption: 'var(--c-text-caption, #6D6E6E)',
    light: 'var(--c-text-light, #FDFDFD)',
    button: 'var(--c-text-button, #FDFDFD)',
    code: 'var(--c-text-code, #063289)'
  },
  background: {
    body: 'var(--bg-primary, #FDFDFD)',
    editor: 'var(--bg-editor, #F6FCFF)',
    editorFocus: 'var(--bg-editor-focus, #B6E4FF4C)'
  },
  primary: {
    dark: 'var(--c-primary-100, #3267B7)',
    main: 'var(--c-primary-200, #3F81E5)',
    light: 'var(--c-primary-300, #8CB3EF)'
  },
  feeling: {
    success: 'var(--c-success, #19C44D)',
    warning: 'var(--c-warning, #FFC445)',
    error: 'var(--c-error, #F74D4D)'
  },
  gradient: {
    primary: 'var(--c-gradient-primary, linear-gradient(30deg, #3F81E5, #3F81E599))',
    success: 'var(--c-gradient-success, linear-gradient(30deg, #19C44D, #19C44D99))',
    warning: 'var(--c-gradient-warning, linear-gradient(30deg, #FFC445, #FFC44599))',
    error: 'var(--c-gradient-error, linear-gradient(30deg, #F74D4D, #F74D4D99))',
    disabled: 'var(--c-gradient-disabled, linear-gradient(30deg, #6D6E6E66, #6D6E6E33))'
  }
};

/**
 * Space
 */
theme.space = ['0', '3px', '6px', '12px', '18px', '24px', '36px', '48px', '72px', '96px'];

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
  '0px 6px 12px -12px rgba(0,0,0,0.15)',
  '0px 6px 24px -12px rgba(0,0,0,0.2)',
  '0px 6px 24px 0px rgba(0,0,0,0.15);'
];
