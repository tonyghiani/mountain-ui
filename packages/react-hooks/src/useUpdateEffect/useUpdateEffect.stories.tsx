import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Paragraph } from '@mountain-ui/doc-tools';
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
    <Container padding={4}>
      <Box
        display='flex'
        borderRadius={12}
        border='1px solid'
        flexDirection='column'
        borderColor='hsl(206, 84%, 60%)'
        overflow='hidden'
        width={300}
      >
        <Box bg='hsl(206, 84%, 60%)' p={2}>
          <Paragraph fontSize={3} strong textAlign='center' color='#FFFFFF'>
            {count}
          </Paragraph>
        </Box>
        <Box p={3}>
          <Button onClick={() => setCount(prev => prev + 1)} width={1}>
            Increment
          </Button>
        </Box>
        <Paragraph fontSize={3} strong textAlign='center'>
          useEffect {effect ? '✅' : '❌'}
        </Paragraph>
        <Paragraph fontSize={3} strong textAlign='center'>
          useUpdateEffect {updateEffect ? '✅' : '❌'}
        </Paragraph>
      </Box>
    </Container>
  );
};
