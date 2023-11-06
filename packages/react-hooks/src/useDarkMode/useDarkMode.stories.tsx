import React from 'react';
import { Button, Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useDarkMode from './useDarkMode';

const meta = {
  title: 'Hooks/useDarkMode',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [isDarkMode, setDarkMode] = useDarkMode({ darkModeClassName: 'dark-mode' });

  return (
    <Container>
      <Card
        heading={
          <Text className='bold text-light'>Body has dark mode class: {isDarkMode.toString()}</Text>
        }
      >
        <div className='flex gap-2 p-2'>
          <Button onClick={() => setDarkMode(true)}>Enable</Button>
          <Button onClick={() => setDarkMode(false)}>Disable</Button>
        </div>
      </Card>
    </Container>
  );
}
