import React from 'react';
import { Container, Heading } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useIsClient from './useIsClient';

const meta = {
  title: 'Hooks/useIsClient',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const isClient = useIsClient();

  return (
    <Container>
      {isClient && <Heading>This is displayed only in client side rendering.</Heading>}
    </Container>
  );
}
