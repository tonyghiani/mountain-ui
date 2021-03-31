import React from 'react';
import { render } from 'mui-testing-tools';

import Code from './Code';

describe('Code', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Code>Code here</Code>);
    expect(container).toBeInTheDocument();
  });
});
