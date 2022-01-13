import React from 'react';
import { render } from 'mui-testing-tools';

import Input from './Input';

describe('Input', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });
});
