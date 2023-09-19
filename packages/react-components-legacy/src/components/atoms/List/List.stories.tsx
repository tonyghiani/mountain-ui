import React from 'react';

import { ListItem, Text } from '../index';

import List, { ListProps } from './List';

export default {
  title: 'Atoms/List',
  component: List
};

export const ListStory = ({ children, ...args }: ListProps) => (
  <List {...args}>
    <ListItem>
      <Text>{children}</Text>
    </ListItem>
    <ListItem>
      <Text>{children}</Text>
    </ListItem>
    <ListItem>
      <Text>{children}</Text>
    </ListItem>
    <ListItem>
      <Text>{children}</Text>
    </ListItem>
  </List>
);

ListStory.storyName = 'List';

ListStory.args = {
  children: 'Mountain UI library'
};

ListStory.parameters = {
  jest: ['List.test.js']
};
