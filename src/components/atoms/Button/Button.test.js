import React from 'react';
import { render, screen } from 'mui-testing-tools';

import theme from './../../../defaultTheme';
import Button from './Button';

describe('Button', () => {
  it('should render correctly on mount', () => {
    render(<Button>Mountain UI</Button>);
    const buttonNode = screen.getByRole('button');
    expect(buttonNode).toBeInTheDocument();
    expect(buttonNode).toHaveStyle(`
      text-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
      border-radius: 12px;
      box-shadow: ${theme.shadows[1]};
      transition: all .3s ease;
    `);
  });

  describe('should render the proper style when has variant', () => {
    it('primary', () => {
      render(<Button variant='primary'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: var(--c-gradient-primary, linear-gradient(30deg, #3F81E5, #3F81E599))`
      );
    });

    it('success', () => {
      render(<Button variant='success'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: var(--c-gradient-success, linear-gradient(30deg, #19C44D, #19C44D99))`
      );
    });

    it('warning', () => {
      render(<Button variant='warning'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: var(--c-gradient-warning, linear-gradient(30deg, #FFC445, #FFC44599))`
      );
    });

    it('error', () => {
      render(<Button variant='error'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: var(--c-gradient-error, linear-gradient(30deg, #F74D4D, #F74D4D99))`
      );
    });
  });
});
