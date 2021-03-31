import React from 'react';
import { render } from '@testing-library/react';

import { Box, Container, Grid } from './index';

describe('Layout', () => {
  describe('Box', () => {
    it('should render correctly on mount', () => {
      const { getByTestId } = render(<Box data-testid='test' />);
      expect(getByTestId('test')).toBeInTheDocument();
    });

    it('should propagate additional style props', () => {
      const { getByTestId } = render(
        <Box data-testid='test' bg='#F0F0F0' color='#F0F0F0' padding={2} />
      );
      const box = getByTestId('test');

      expect(box).not.toHaveStyle(`background-color: #FFFFFF;`);
      expect(box).not.toHaveStyle(`color: #FFFFFF;`);
      expect(box).not.toHaveStyle(`padding: 0;`);
      expect(box).toHaveStyle(`
        background-color: #F0F0F0;
        color: #F0F0F0;
        padding: 8px;
      `);
    });
  });

  describe('Container component', () => {
    it('should render correctly on mount', () => {
      const { getByTestId } = render(<Container data-testid='test' />);
      expect(getByTestId('test')).toBeInTheDocument();
    });

    it('should propagate additional style props', () => {
      const { getByTestId } = render(
        <Container data-testid='test' bg='#F0F0F0' color='#F0F0F0' paddingX={5} />
      );
      const container = getByTestId('test');

      expect(container).not.toHaveStyle(`background-color: #FFFFFF;`);
      expect(container).not.toHaveStyle(`color: #FFFFFF;`);
      expect(container).not.toHaveStyle(`padding: 0;`);
      expect(container).toHaveStyle(`
        background-color: #F0F0F0;
        color: #F0F0F0;
        padding-left: 16px;
        padding-right: 16px;
      `);
    });
  });

  describe('Grid component', () => {
    it('should render correctly on mount', () => {
      const { getByTestId } = render(<Grid data-testid='test' />);
      expect(getByTestId('test')).toBeInTheDocument();
    });

    it('should propagate additional grid style props', () => {
      const { getByTestId } = render(
        <Grid data-testid='test' bg='#F0F0F0' color='#F0F0F0' gridGap={2} />
      );
      const grid = getByTestId('test');

      expect(grid).not.toHaveStyle(`background-color: #FFFFFF;`);
      expect(grid).not.toHaveStyle(`color: #FFFFFF;`);
      expect(grid).not.toHaveStyle(`grid-gap: 0;`);
      expect(grid).toHaveStyle(`
        background-color: #F0F0F0;
        color: #F0F0F0;
      `);
    });
  });
});
