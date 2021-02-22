import React from 'react';
import merge from 'deepmerge';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './defaultTheme';
import { GlobalStyles } from './GlobalStyle';

function Provider({ theme = {}, children, ...props }) {
  const customTheme = React.useMemo(
    () => merge(defaultTheme, theme, { arrayMerge: (_, sourceArray) => sourceArray }),
    [theme]
  );

  return (
    <ThemeProvider theme={customTheme} {...props}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Provider.displayName = 'ThemeProvider'

export default Provider;