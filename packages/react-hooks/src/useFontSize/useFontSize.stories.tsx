import React from 'react';
import { Button, Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useFontSize from './useFontSize';

const meta = {
  title: 'Hooks/useFontSize',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [fontSize, setFontSize] = useFontSize();

  return (
    <Container>
      <Card heading={<Text className='bold text-light'>Font size variable: {fontSize}</Text>}>
        <div className='flex gap-2 p-2'>
          <Button onClick={() => setFontSize(12)}>Descrease</Button>
          <Button onClick={() => setFontSize(20)}>Increase</Button>
        </div>
      </Card>
    </Container>
  );
}
