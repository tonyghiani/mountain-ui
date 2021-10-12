import React from 'react';
import { render } from 'mui-testing-tools';

import { ListItem } from '../index';

import List, { ListProps } from './List';

const renderList = (props?: Pick<ListProps, 'dense'>) =>
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

  it('should add a margin to every list item, expect the last one', () => {
    const { getAllByRole } = renderList();

    const listItems = getAllByRole('listitem');

    expect(listItems[0]).toHaveStyle(`margin-bottom: 18px;`);
    expect(listItems[1]).toHaveStyle(`margin-bottom: 18px;`);
    expect(listItems[2]).not.toHaveStyle(`margin-bottom: 18px;`);
  });

  it('should remove the bottom margin from list items if the property dense is true', () => {
    const { getAllByRole } = renderList({ dense: true });

    const listItems = getAllByRole('listitem');

    expect(listItems[0]).not.toHaveStyle(`margin-bottom: 18px;`);
    expect(listItems[1]).not.toHaveStyle(`margin-bottom: 18px;`);
    expect(listItems[2]).not.toHaveStyle(`margin-bottom: 18px;`);
  });
});
