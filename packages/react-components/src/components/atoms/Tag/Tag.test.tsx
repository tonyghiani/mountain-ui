import React from 'react';
import { render } from 'mui-testing-tools';

import Tag from './Tag';

describe('Tag', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Tag>#mountain-ui</Tag>);
    expect(container).toBeInTheDocument();
  });
});
