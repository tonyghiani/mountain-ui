import React from 'react';
import { Button, Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useLocalStorage from './useLocalStorage';

const meta = {
  title: 'Hooks/useLocalStorage',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [value1, setValue1] = useLocalStorage('my_favorite_food', '🍖');
  const [value2, setValue2] = useLocalStorage('my_favorite_food', '🧅');

  return (
    <Container className='flex flex-col gap-2'>
      <Text>Refresh the page to retrieve your stored value.</Text>
      <Card heading={<Text className='bold text-light'>Stored value: {value1}.</Text>}>
        <div className='flex gap-2 p-2'>
          <Button onClick={() => setValue1('🍕')}>Store a 🍕</Button>
          <Button onClick={() => setValue1('🍔')}>Store a 🍔</Button>
        </div>
      </Card>
      <Card heading={<Text className='bold text-light'>Stored value: {value2}.</Text>}>
        <div className='flex gap-2 p-2'>
          <Button onClick={() => setValue2('🥐')}>Store a 🥐</Button>
          <Button onClick={() => setValue2('🥘')}>Store a 🥘</Button>
        </div>
      </Card>
    </Container>
  );
}
