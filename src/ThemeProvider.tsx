import React from 'react';
import merge from 'deepmerge';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './defaultTheme';

function Provider({ theme = {}, ...props }) {
  const customTheme = React.useMemo(
    () => merge(defaultTheme, theme, { arrayMerge: (_, sourceArray) => sourceArray }),
    [theme]
  );

  return (
    <ThemeProvider theme={customTheme} {...props} />
  );
};

Provider.displayName = 'ThemeProvider'

export default Provider;