import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import { ContainerStory, GridStory } from './Layout.stories';

initStoryshots();

describe('Layout', () => {
  describe('Container component', () => {
    it('should render correctly on mount', () => {
      const { container } = render(<ContainerStory {...ContainerStory.args} />);
      expect(container).toBeInTheDocument();
    });
  });

  describe('Grid component', () => {
    it('should render correctly on mount', () => {
      const { container } = render(<GridStory {...GridStory.args} />);
      expect(container).toBeInTheDocument();
    });
  });
});
