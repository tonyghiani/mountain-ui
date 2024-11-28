import React from 'react';
import { Card, Container, Text } from '@mountain-ui/doc-tools';
import { Meta, StoryObj } from '@storybook/react';

import useMediaQuery from './useMediaQuery';

const meta = {
  title: 'Hooks/useMediaQuery',
  component: Demo
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

function Demo() {
  const mediaQueries = {
    mobile: 'screen and (min-width: 1px) and (max-width: 512px)',
    tablet: 'screen and (min-width: 513px) and (max-width: 1024px)',
    desktop: 'screen and (min-width: 1025px) and (max-width: 1536px)',
    wideScreen: 'screen and (min-width: 1537px)'
  };

  const medias = {
    isMobile: useMediaQuery(mediaQueries.mobile),
    isTablet: useMediaQuery(mediaQueries.tablet),
    isDesktop: useMediaQuery(mediaQueries.desktop),
    'isMobile or isTablet': useMediaQuery(mediaQueries.mobile, mediaQueries.tablet)
  };

  return (
    <Container className='flex flex-col gap-2'>
      <Text>Try to resize the window to see the flags changing.</Text>
      <div className='flex gap-2'>
        {Object.keys(medias).map((name, i) => (
          <Card key={i} heading={<Text className='bold text-light'>{name}</Text>}>
            <Text className='grid place-items-center p-2'>{medias[name].toString()}</Text>
          </Card>
        ))}
      </div>
    </Container>
  );
}
