import React from 'react';
import { render } from 'mui-testing-tools';

import { ListItem } from '../index';

import List, { ListProps } from './List';

const renderList = (props?: Pick<ListProps, 'dense' | 'horizontal'>) =>
  render(
    <List {...props}>
      <ListItem>Mountain-ui</ListItem>
      <ListItem>Mountain-ui</ListItem>
      <ListItem>Mountain-ui</ListItem>
    </List>
  );

describe('List', () => {
  it('should render correctly on mount', () => {
    const { container } = renderList();
    expect(container).toBeInTheDocument();
  });

  it('should add a gap between every list item', () => {
    const { getByRole } = renderList();

    const list = getByRole('list');

    expect(list).toHaveStyle(`gap: 16px;`);
  });

  it('should remove the gap from list items if the property dense is true', () => {
    const { getByRole } = renderList({ dense: true });

    const list = getByRole('list');

    expect(list).not.toHaveStyle(`gap: 16px;`);
  });

  it('should render the list horizontally when the horizontal property is true', () => {
    const { getByRole } = renderList({ horizontal: true });

    const list = getByRole('list');

    expect(list).toHaveStyle(`flex-direction: row;`);
  });
});
