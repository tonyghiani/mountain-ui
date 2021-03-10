import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import { Outline, Primary } from './Button.stories';

initStoryshots();

describe('Button', () => {
  describe('primary variant', () => {
    it('should render correctly on mount', () => {
      const { container } = render(<Primary {...Primary.args} />);
      expect(container).toBeInTheDocument();
    });
  });

  describe('outline variant', () => {
    it('should render correctly on mount', () => {
      const { container } = render(<Outline {...Outline.args} />);
      expect(container).toBeInTheDocument();
    });
  });
});
