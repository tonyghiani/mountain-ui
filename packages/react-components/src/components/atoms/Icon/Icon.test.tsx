import React from 'react';
import { Mountains } from '@mountain-ui/icons';
import { render } from 'mui-testing-tools';

import Icon from './Icon';

describe.only('Icon', () => {
  it('should render correctly on mount', () => {
    const { container } = render(
      <Icon>
        <Mountains />
      </Icon>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
