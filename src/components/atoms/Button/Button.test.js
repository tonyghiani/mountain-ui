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
      color: #FDFDFD;
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
        `background: linear-gradient(30deg, ${theme.colors.accent.primary.normal}, ${theme.colors.accent.primary.light})`
      );
    });

    it('success', () => {
      render(<Button variant='success'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: linear-gradient(30deg, ${theme.colors.feeling.success.normal}, ${theme.colors.feeling.success.light})`
      );
    });

    it('warning', () => {
      render(<Button variant='warning'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: linear-gradient(30deg, ${theme.colors.feeling.warning.normal}, ${theme.colors.feeling.warning.light})`
      );
    });

    it('error', () => {
      render(<Button variant='error'>Mountain UI</Button>);
      const buttonNode = screen.getByRole('button');
      expect(buttonNode).toHaveStyle(
        `background: linear-gradient(30deg, ${theme.colors.feeling.error.normal}, ${theme.colors.feeling.error.light})`
      );
    });
  });
});
