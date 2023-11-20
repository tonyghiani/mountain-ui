import React from 'react';
import { Button, Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useBoolean from './useBoolean';

const meta = {
  title: 'Hooks/useBoolean',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [value, { on, off, toggle }] = useBoolean();

  return (
    <Container >
      <Card heading={
        <Text className="bold text-light">
          {value.toString().toUpperCase()}
        </Text>
      }>
        <div className="flex gap-2 p-2">
          <Button onClick={on}>
            On
          </Button>
          <Button onClick={off}>
            Off
          </Button>
          <Button onClick={toggle}>
            Toggle
          </Button>
        </div>
      </Card>
    </Container>
  );
};