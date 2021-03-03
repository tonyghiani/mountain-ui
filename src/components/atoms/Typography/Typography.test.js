import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

import { HeadingStory } from './Typography.stories';

initStoryshots();

describe('Typography', () => {
  describe('Heading component', () => {
    it('should render correctly on mount', () => {
      const { container } = render(<HeadingStory {...HeadingStory.args} />);
      expect(container).toBeInTheDocument();
    });
  });
});
