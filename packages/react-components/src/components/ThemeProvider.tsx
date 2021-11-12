import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { DefaultTheme, generateTheme } from '../defaultTheme';

import { GlobalStyles } from './GlobalStyle';

interface ProviderProps {
  /* Provider children */
  children: React.ReactNode;
  /* Theme to inject in the provider */
  theme?: DefaultTheme;
}

/**
 * A `ThemeProvider` component which merges the default theme with custom theme props.
 */
export function ThemeProvider({ theme, children, ...props }: ProviderProps) {
  const customTheme = React.useMemo(() => generateTheme(theme), [theme]);

  return (
    <StyledProvider theme={customTheme} {...props}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
}

ThemeProvider.displayName = 'ThemeProvider';
