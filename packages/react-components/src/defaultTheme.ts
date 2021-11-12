import { deepMerge } from '@mountain-ui/utils';

export const defaultTheme = {
  breakpoints: [512, 1024, 1536],
  colors: {
    white: 'hsl(0, 0%, 98%)',
    black: 'hsl(240, 10%, 10%)',
    gray: {
      50: 'hsl(210, 12%, 95%)',
      100: 'hsl(210, 10.5%, 86%)',
      200: 'hsl(210, 9%, 77%)',
      300: 'hsl(210, 7.5%, 68%)',
      400: 'hsl(210, 6%, 59%)',
      500: 'hsl(210, 7.5%, 50%)',
      600: 'hsl(210, 9%, 41%)',
      700: 'hsl(210, 10.5%, 32%)',
      800: 'hsl(210, 12%, 23%)',
      900: 'hsl(210, 13.5%, 14%)'
    },
    blue: getColorScale(206),
    green: getColorScale(155),
    red: getColorScale(7),
    yellow: getColorScale(50),
    purple: getColorScale(255)
  },
  fonts: {
    normal: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif',
    code: "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace"
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1rem',
    'clamp(1.2rem, 8vw - 1.9rem, 1.5rem)',
    'clamp(1.3rem, 8vw - 1.8rem, 1.6rem)',
    'clamp(1.4rem, 8vw - 1.7rem, 1.8rem)',
    'clamp(1.6rem, 8vw - 1.5rem, 2.2rem)',
    'clamp(2.1rem, 8vw - 1rem, 3rem)'
  ],
  fontWeights: [300, 400, 500, 700, 900],
  lineHeights: ['1.25em', '1.5em', '1.625em', '1.75em', '2em'],
  radii: ['0', '2px', '4px', '8px', '12px', '16px', '24px', '32px', '100%'],
  space: [
    '0',
    '2px',
    '4px',
    '8px',
    '12px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px'
  ],
  shadows: [
    'none',
    '0 1px 3px 0 hsla(210,13.5%,14%,0.2),0 1px 1px 0 hsla(210,12%,23%,0.15),0 2px 1px -1px hsla(210,10.5%,32%,0.1)',
    '0 5px 5px -3px hsla(210, 13.5%, 14%, 0.2), 0 8px 10px 1px hsla(210, 12%, 23%, 0.15), 0 3px 14px 2px hsla(210, 10.5%, 32%, 0.1)'
  ]
};

export function generateTheme(customTheme: DefaultTheme = {}) {
  const theme: DefaultTheme = deepMerge(defaultTheme, customTheme);
  const breakpoints = getBreakpoints(theme.breakpoints);
  const fontSizes = getFontSizes(theme.fontSizes);
  const fontWeights = getfontWeights(theme.fontWeights);
  const lineHeights = getLineHeights(theme.lineHeights);
  const mediaQueries = getMediaQueries(theme.breakpoints);

  return {
    ...theme,
    breakpoints,
    fontSizes,
    fontWeights,
    lineHeights,
    mediaQueries
  };
}

/**
 * Theme utils
 */
function getMediaQueries(breakpoints: ThemeScale<number, BreakpointAlias>) {
  const queries = [];
  const ranges = ['mobile', 'tablet', 'desktop', 'wideScreen'];
  for (let i = -1; i < breakpoints.length; i++) {
    const point = breakpoints[i] || 0;
    const nextPoint = breakpoints[i + 1];
    const query = [
      'screen',
      `(min-width: ${point}px)`,
      nextPoint && `(max-width: ${nextPoint - 1}px)`
    ]
      .filter(Boolean)
      .join(' and ');
    queries.push(query);
  }

  return queries.reduce((res, query, pos) => ({ ...res, [ranges[pos] || pos]: query }), {});
}

function getFontSizes(fontSizes: ThemeScale<string, FontSizeAlias>) {
  const aliases = ['caption', 'secondaryBody', 'body', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'];

  setAliases(fontSizes, aliases);

  return fontSizes;
}

function getBreakpoints(points: ThemeScale<number, BreakpointAlias>) {
  const aliases = ['mobile', 'tablet', 'desktop', 'wideScreen'];

  const breakpoints = points.map(point => point + 'px');
  setAliases(breakpoints, aliases);

  return breakpoints;
}

function getLineHeights(lineHeights: ThemeScale<string, LineHeightAlias>) {
  const aliases = ['short', 'normal', 'tall', 'ultraTall', 'double'];

  setAliases(lineHeights, aliases);

  return lineHeights;
}

function getfontWeights(fontWeights: ThemeScale<number, FontWeightAlias>) {
  const aliases = ['light', 'normal', 'semiBold', 'bold', 'ultraBold'];

  setAliases(fontWeights, aliases);

  return fontWeights;
}

function getColorScale(baseColor: number) {
  const stages = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let saturation = 104;
  let luminosity = 105;

  return stages.reduce(
    (palette, stage) => ({
      ...palette,
      [stage * 100]: `hsl(${baseColor}, ${(saturation -= 4)}%, ${(luminosity -= 9)}%)`
    }),
    {}
  );
}

function setAliases(list: Array<string | number>, aliases: string[]) {
  list.forEach((item, pos) => (list[aliases[pos] || pos] = item));
}

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
export type LineHeightAlias = 'short' | 'normal' | 'tall' | 'ultraTall' | 'double';
export type MediaQuery = string;
export type Space = string;

/**
 * Theme Interfaces
 */
export interface DefaultTheme {
  breakpoints?: ThemeScale<number, BreakpointAlias>;
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
