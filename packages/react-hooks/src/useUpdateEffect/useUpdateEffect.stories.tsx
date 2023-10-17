import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useUpdateEffect from './useUpdateEffect';

const meta = {
  title: 'Hooks/useUpdateEffect',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [count, setCount] = useState(0);
  const [effect, setEffect] = useState(false);
  const [updateEffect, setUpdateEffect] = useState(false);

  useEffect(() => {
    setEffect(true);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffect(true);
  }, [count]);

  return (
    <Container >
      <Card heading={
        <Text className="bold text-light">
          {count}
        </Text>
      }>
        <div className="flex flex-col gap-3 p-2 items-center justify-center">
          <Button onClick={() => setCount(prev => prev + 1)} width={1}>
            Increment
          </Button>
          <Text>
            useEffect {effect ? '✅' : '❌'}
          </Text>
          <Text>
            useUpdateEffect {updateEffect ? '✅' : '❌'}
          </Text>
        </div>
      </Card>
    </Container >
  );
};
