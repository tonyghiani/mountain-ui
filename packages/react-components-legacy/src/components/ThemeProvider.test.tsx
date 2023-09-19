import React from 'react';
import { render } from 'mui-testing-tools';

import { Box } from './atoms';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  const theme = {
    colors: {
      testColor: '#aaaaaa'
    }
  };

  it('should pass the default theme properties to the children', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Box data-testid='test' backgroundColor='gray.900' />
      </ThemeProvider>
    );
    const box = getByTestId('test');

    expect(box).toHaveStyleRule('background-color', 'hsl(210,13.5%,14%)');
  });

  it('should merge the received theme properties with the default theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Box data-testid='test' color='testColor' backgroundColor='gray.900' />
      </ThemeProvider>
    );
    const box = getByTestId('test');

    expect(box).toHaveStyleRule('background-color', 'hsl(210,13.5%,14%)');
    expect(box).toHaveStyleRule('color', '#aaaaaa');
  });
});
