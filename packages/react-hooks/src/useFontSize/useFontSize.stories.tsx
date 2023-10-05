import React from 'react';
import { Box, Button, Container, Paragraph } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useFontSize from './useFontSize';

const meta = {
  title: 'Hooks/useFontSize',
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const [fontSize, setFontSize] = useFontSize();

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
            Font size variable: {fontSize}
          </Paragraph>
        </Box>
        <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gridGap={3} p={3}>
          <Button onClick={() => setFontSize(12)} width={1}>
            Descrease
          </Button>
          <Button onClick={() => setFontSize(20)} width={1}>
            Increase
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
