import React from 'react';
import { IconProps } from '@mountain-ui/react-components';

export interface IconPresetProps extends Omit<IconProps, 'children'> {
  children?: React.ReactNode;
}
