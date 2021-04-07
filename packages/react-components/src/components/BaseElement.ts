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
  LayoutProps &
  OpacityProps &
  PositionProps &
  ShadowProps &
  SystemCssProperties &
  SpaceProps & {
    /* HTML tag or component to use for finally render the */
    as?: string;
  };

const custom = system({
  cursor: true
});

export const styleProps = compose(
  background,
  border,
  color,
  custom,
  flexbox,
  layout,
  opacity,
  position,
  shadow,
  space
);

export const BaseElement = styled.div<BaseElementProps>(styleProps);