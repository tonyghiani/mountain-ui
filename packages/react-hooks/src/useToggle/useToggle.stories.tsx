import React from 'react';
import { Button, Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useToggle from './useToggle';

const meta = {
  title: 'Hooks/useToggle',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [value, toggle] = useToggle();

  return (
    <Container>
      <Card heading={<Text className='bold text-light'>{value.toString().toUpperCase()}</Text>}>
        <div className='p-2'>
          <Button onClick={toggle}>Toggle</Button>
        </div>
      </Card>
    </Container>
  );
}
