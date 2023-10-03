import React from 'react';
import { render, screen } from '@testing-library/react';

import { MntButton, BUTTON_BASE_CLASS, BUTTON_COLORS, BUTTON_VARIANTS, MntButtonColor, MntButtonVariant } from './Button';

const colors = Object.keys(BUTTON_COLORS) as MntButtonColor[]
const variants = Object.keys(BUTTON_VARIANTS) as MntButtonVariant[]

describe('<MntButton />', () => {
  it('should render correctly on mount', () => {
    render(<MntButton>Mountain UI</MntButton>);
    const buttonNode = screen.getByRole('button');
    expect(buttonNode).toBeInTheDocument();
  });

  describe('should render the passed variant', () => {
    variants.forEach(variant => {
      it(variant, () => {
        render(<MntButton variant={variant}>Mountain UI</MntButton>);
        const buttonNode = screen.getByRole('button');
        expect(buttonNode).toHaveClass(BUTTON_BASE_CLASS)
        expect(buttonNode).toHaveClass(BUTTON_VARIANTS[variant]);
      });
    })
  });

  describe('should render the passed color', () => {
    colors.forEach(color => {
      it(color, () => {
        render(<MntButton color={color}>Mountain UI</MntButton>);
        const buttonNode = screen.getByRole('button');
        expect(buttonNode).toHaveClass(BUTTON_BASE_CLASS)
        expect(buttonNode).toHaveClass(BUTTON_COLORS[color]);
      });
    })
  });
});
