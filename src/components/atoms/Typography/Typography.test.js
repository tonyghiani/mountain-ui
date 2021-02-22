import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import { Basic } from './Typography.stories';

initStoryshots();

describe('Typography', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Basic {...Basic.args} />);
    expect(container).toBeInTheDocument();
  });
});
