import React from 'react';
import { render } from 'mui-testing-tools';

import Tag from './Tag';

describe('Tag', () => {
  it('should render correctly on mount', () => {
    const { container } = render(<Tag>#mountain-ui</Tag>);
    expect(container).toBeInTheDocument();
  });

  it('should render correctly the specified size', () => {
    const { getByTestId } = render(
      <Tag size='S' data-testid='tag'>
        #mountain-ui
      </Tag>
    );
    const tag = getByTestId('tag');
    expect(tag).toHaveStyle(`
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 4px;
      padding-bottom: 4px;
    `);
  });
});