import React from 'react';
import { Box, Container, Paragraph } from '@mountain-ui/doc-tools';
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
            Dark mode preference enabled: {isDarkMode.toString()}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph strong textAlign='center'>
            Switch your mode in the system preferences to see how it detects the mode.
          </Paragraph>
        </Box>
      </Box>
    </Container>
  );
};
