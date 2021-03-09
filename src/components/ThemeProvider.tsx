import React from 'react';
import merge from 'deepmerge';
import { ThemeProvider as StyledProvider } from 'styled-components';

import defaultTheme, { DefaultTheme } from '../defaultTheme';

import { GlobalStyles } from './GlobalStyle';

interface ProviderProps {
  /* Provider children */
  children: React.ReactNode
  /* Theme to inject in the provider */
  theme: DefaultTheme
}

/**
 * A `ThemeProvider` component which merges the default theme with custom theme props.
 */
export function ThemeProvider({ theme = defaultTheme, children, ...props }: ProviderProps) {
  const customTheme = React.useMemo(
    () => merge(defaultTheme, theme, { arrayMerge: (_, sourceArray) => sourceArray }),
    [theme]
  );

  return (
    <StyledProvider theme={customTheme} {...props}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider'