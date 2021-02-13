import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import { Basic } from './Button.stories';

initStoryshots();

describe('Button', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Basic {...Basic.args} />);
    expect(container).toBeInTheDocument();
  });
});
