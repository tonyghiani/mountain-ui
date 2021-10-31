import React from 'react';
import { render } from 'mui-testing-tools';

import CodeBlock from './CodeBlock';

describe('CodeBlock', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<CodeBlock>CodeBlock here</CodeBlock>);
    expect(container).toBeInTheDocument();
  });
});
