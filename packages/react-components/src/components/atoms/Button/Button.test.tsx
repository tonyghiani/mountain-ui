import React from 'react';
import { render, screen } from 'mui-testing-tools';

import { Button, BUTTON_BASE_CLASS, BUTTON_COLORS, BUTTON_VARIANTS, ButtonColor, ButtonVariant } from './Button';

const colors = Object.keys(BUTTON_COLORS) as ButtonColor[]
const variants = Object.keys(BUTTON_VARIANTS) as ButtonVariant[]

describe('<Button />', () => {
  it('should render correctly on mount', () => {
    render(<Button>Mountain UI</Button>);
    const buttonNode = screen.getByRole('button');
    expect(buttonNode).toBeInTheDocument();
  });

  describe('should render the passed variant', () => {
    variants.forEach(variant => {
      it(variant, () => {
        render(<Button variant={variant}>Mountain UI</Button>);
        const buttonNode = screen.getByRole('button');
        expect(buttonNode).toHaveClass(BUTTON_BASE_CLASS)
        expect(buttonNode).toHaveClass(BUTTON_VARIANTS[variant]);
      });
    })
  });

  describe('should render the passed color', () => {
    colors.forEach(color => {
      it(color, () => {
        render(<Button color={color}>Mountain UI</Button>);
        const buttonNode = screen.getByRole('button');
        expect(buttonNode).toHaveClass(BUTTON_BASE_CLASS)
        expect(buttonNode).toHaveClass(BUTTON_COLORS[color]);
      });
    })
  });
});
