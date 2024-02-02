import React from 'react';
import { Box, Text } from '@mountain-ui/doc-tools';
import styled from 'styled-components';

import { Icon, IconPresetProps } from './Icon';
import * as Icons from './icons';

const IconList = props => (
  <Box
    display='grid'
    gridGap={3}
    gridTemplateColumns='repeat(auto-fit, minmax(215px, 1fr))'
    {...props}
  />
);
const Card = props => (
  <Box
    display='grid'
    gridTemplateColumns='1fr'
    p={16}
    borderRadius={16}
    boxShadow='0px 4px 16px -4px hsl(0deg 10% 10% / 50%)'
    placeItems='center'
    maxWidth={300}
    {...props}
  />
);

export default {
  title: 'Icons/All',
  component: Icon,
  argTypes: {
    withTransition: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      control: {
        type: 'color'
      }
    },
    fontSize: {
      control: {
        type: 'range',
        min: 6,
        max: 200,
        step: 1
      },
      defaultValue: 64
    }
  }
};

const ReactIcon = styled(Icons.React)`
  :hover {
    color: green;
  }
`;

export const Basic = (props: IconPresetProps) => {
  return (
    <Card>
      <ReactIcon {...props} />
      <Text width={1} textAlign='center' strong>
        React
      </Text>
    </Card>
  );
};

export const AllIcons = (props: IconPresetProps) => {
  return (
    <IconList as='ul'>
      {Object.entries(Icons).map(([name, CurrentIcon]) => (
        <Card as='li' key={name}>
          <CurrentIcon {...props} />
          <Text width={1} textAlign='center' strong wrapped>
            {name}
          </Text>
        </Card>
      ))}
    </IconList>
  );
};
