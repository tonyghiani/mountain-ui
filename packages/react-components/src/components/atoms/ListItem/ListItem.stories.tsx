import React from 'react';

import { Text } from '../Typography';

import ListItem, { ListItemProps } from './ListItem';

export default {
  title: 'Atoms/ListItem',
  component: ListItem
};

export const ListItemStory = ({ children, ...args }: ListItemProps) => {
  return (
    <ListItem {...args}>
      <Text>{children}</Text>
    </ListItem>
  );
};

ListItemStory.storyName = 'ListItem';

ListItemStory.args = {
  children: 'Mountain UI library'
};

ListItemStory.parameters = {
  jest: ['ListItem.test.js']
};
