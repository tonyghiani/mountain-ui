import React from 'react';
import { Box, Button, Container, Paragraph } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useToggle from './useToggle';

const meta = {
  title: 'Hooks/useToggle',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [value, toggle] = useToggle();

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
            {value.toString().toUpperCase()}
          </Paragraph>
        </Box>
        <Box p={3}>
          <Button onClick={toggle} width={1}>
            Toggle
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
