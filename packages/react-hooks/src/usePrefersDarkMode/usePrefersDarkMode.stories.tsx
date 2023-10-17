import React from 'react';
import { Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import usePrefersDarkMode from './usePrefersDarkMode';

const meta = {
  title: 'Hooks/usePrefersDarkMode',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const isDarkMode = usePrefersDarkMode();

  return (
    <Container >
      <Card heading={
        <Text className="bold text-light">
          Dark mode preference enabled: {isDarkMode.toString()}
        </Text>
      }>
        <Text className="p-2">
          Switch your mode in the system preferences to see how it detects the mode.
        </Text>
      </Card>
    </Container>
  );
};
