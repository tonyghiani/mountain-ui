import React from 'react';
import { render } from 'mui-testing-tools';

import Accordion from './Accordion';

describe('Accordion', () => {
  it('should render correctly on mount', () => {
    const { container } = render(
      <Accordion>
        <Accordion.Summary>Click me</Accordion.Summary>
        <Accordion.Detail>My accordion detail</Accordion.Detail>
      </Accordion>
    );
    expect(container).toBeInTheDocument();
  });
});
