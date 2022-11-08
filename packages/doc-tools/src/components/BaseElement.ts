import React from 'react';
import { SystemCssProperties } from '@styled-system/css';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system
} from 'styled-system';

export type BaseElementProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  ShadowProps &
  SystemCssProperties &
  SpaceProps & {
    /* HTML tag or component to use for finally render the */
    as?: React.ElementType;
  };

const custom = system({
  cursor: true,
  gap: {
    property: 'gap',
    scale: 'space'
  },
  placeItems: true,
  transform: true,
  transition: true,
  animation: true
});

export const styleProps = compose(
  background,
  border,
  color,
  custom,
  flexbox,
  grid,
  layout,
  opacity,
  position,
  shadow,
  space
);

export const BaseElement = styled.div<BaseElementProps>(styleProps);