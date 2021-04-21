import React from 'react';
import styled from 'styled-components';
import { system, typography, variant } from 'styled-system';

import { BaseElementProps, styleProps } from '../../BaseElement';

export type IconProps = BaseElementProps & {
  /* Variant version of the icon */
  variant?: 'icon' | 'button';
  /* Variant version of the icon */
  children: React.ReactNode;
};

export type Ref = HTMLButtonElement | HTMLSpanElement | null;

const StyledIcon = styled.span<BaseElementProps>`
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
        bg: 'transparent'
      }
    }
  })}
  ${typography}
  ${styleProps}
`;

const VARIANT_TAGS = {
  button: 'button',
  icon: 'span'
};

/**
 * TODO: add component description headline
 */
export const Icon = React.forwardRef(function Icon(
  { children, variant, ...props }: IconProps,
  ref: React.Ref<Ref>
) {
  return (
    <StyledIcon ref={ref} variant={variant} as={VARIANT_TAGS[variant]} {...props}>
      {React.Children.only(children)}
    </StyledIcon>
  );
});

Icon.defaultProps = {
  variant: 'icon'
};

Icon.displayName = 'Icon';

export default Icon;
