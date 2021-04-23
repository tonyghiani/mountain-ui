import React from 'react';
import { Grid, Icon, Text } from '@mountain-ui/react-components';
import styled from 'styled-components';

import { IconPresetProps } from './icon.types';
import * as Icons from './icons';

const IconList = props => (
  <Grid gridGap={3} gridTemplateColumns='repeat(auto-fit, minmax(215px, 1fr))' {...props} />
);
const Card = props => (
  <Grid
    gridGap={2}
    gridTemplateColumns='1fr'
    p={4}
    borderRadius={3}
    boxShadow={3}
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
