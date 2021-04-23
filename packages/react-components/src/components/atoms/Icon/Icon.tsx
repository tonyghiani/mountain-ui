import React from 'react';
import styled from 'styled-components';
import { system, typography, variant } from 'styled-system';

import { BaseElementProps, styleProps } from '../../BaseElement';

export type IconRef = HTMLButtonElement | HTMLSpanElement | null;

export interface IconProps extends BaseElementProps {
  /* Variant version of the icon */
  variant?: 'icon' | 'button' | 'link';
  /* Variant version of the icon */
  onClick?: React.MouseEvent<IconRef>;
  /* Transition on style changes */
  withTransition?: boolean;
  /* Variant version of the icon */
  children: React.ReactNode;
}

const StyledIcon = styled.span<IconProps>`
  ${system({
    color: {
      properties: ['fill'],
      scale: 'colors'
    }
  })}
  ${variant({
    variants: {
      icon: {
        color: 'text.primary'
      },
      button: {
        color: 'text.primary',
        border: 0,
        bg: 'transparent',
        cursor: 'pointer'
      }
    }
  })}
  ${p => p.withTransition && '& > svg {transition: all .3s ease}'};
  ${typography}
  ${styleProps}
`;

const VARIANT_TAGS = {
  button: 'button',
  icon: 'span',
  link: 'a'
};

/**
 * Icon component wrapper for svg icons
 */
const Icon = React.forwardRef(function Icon(
  { children, variant, ...props }: IconProps,
  ref: React.Ref<IconRef>
) {
  return (
    <StyledIcon ref={ref} variant={variant} as={VARIANT_TAGS[variant]} {...props}>
      {React.Children.only(children)}
    </StyledIcon>
  );
});

Icon.defaultProps = {
  variant: 'icon',
  withTransition: false
};

Icon.displayName = 'Icon';

export default Icon;
