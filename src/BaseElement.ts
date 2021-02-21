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
  SpaceProps
} from 'styled-system';

export type BaseElementProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  ShadowProps &
  SpaceProps & {
    as?: any;
  };

const styleProps = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  opacity,
  position,
  shadow,
  space
);

export const BaseElement = styled.div<BaseElementProps>(styleProps);
