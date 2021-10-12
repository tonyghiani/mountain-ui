import React from 'react';
import { render } from 'mui-testing-tools';

import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<ListItem>Hello</ListItem>);
    expect(container).toBeInTheDocument();
  });
});
