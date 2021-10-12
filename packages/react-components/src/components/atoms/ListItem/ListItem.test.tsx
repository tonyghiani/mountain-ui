import React from 'react';
import { render } from 'mui-testing-tools';

import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<ListItem>Hello</ListItem>);
    expect(container).toBeInTheDocument();
  });

  it('should hide the icon when the hideIcon property is true', () => {
    const { queryByLabelText } = render(<ListItem hideIcon>Hello</ListItem>);
    expect(queryByLabelText('Item icon')).toBeNull();
  });
});
