import React from 'react';
import { render, screen } from 'mui-testing-tools';

import BaseTypography from './BaseTypography';
import { Heading, Paragraph, Text } from './index';

describe('Typography', () => {
  it('should render correctly on mount', () => {
    render(<BaseTypography>Mountain UI</BaseTypography>);
    const textNode = screen.getByText('Mountain UI');
    expect(textNode).toBeInTheDocument();
  });

  describe('should render the proper style when has the property', () => {
    it('strong', () => {
      render(<BaseTypography strong>Mountain UI</BaseTypography>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toHaveStyle(`font-weight: 700`);
    });

    it('underline', () => {
      render(<BaseTypography underline>Mountain UI</BaseTypography>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toHaveStyle(`text-decoration: underline;`);
    });

    it('uncopyable', () => {
      render(<BaseTypography uncopyable>Mountain UI</BaseTypography>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toHaveStyle(`user-select: none;`);
    });

    it('wrapped', () => {
      render(<BaseTypography wrapped>Mountain UI</BaseTypography>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).not.toHaveStyle(`white-space: wrap;`);
      expect(textNode).not.toHaveStyle(`text-overflow: none;`);
      expect(textNode).not.toHaveStyle(`overflow: auto;`);
      expect(textNode).toHaveStyle(`
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      `);
    });
  });

  describe('Heading', () => {
    it('should render the corrent variant html tag and style', () => {
      render(<Heading variant='h3'>Mountain UI</Heading>);
      const textNode = screen.getByRole('heading');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('H3');
      expect(textNode).toHaveStyle(`
        font-size: 2.1rem;
        line-height: 1.25em;
        font-weight: 700;
      `);
    });

    it('should propagate additional style props', () => {
      render(
        <Heading variant='h3' color='#F0F0F0'>
          Mountain UI
        </Heading>
      );
      const textNode = screen.getByRole('heading');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('H3');
      expect(textNode).toHaveStyle(`
        color: #F0F0F0;
        font-size: 2.1rem;
        line-height: 1.25em;
        font-weight: 700;
      `);
    });
  });

  describe('Text', () => {
    it('should render the corrent variant html tag and style', () => {
      render(<Text variant='primary'>Mountain UI</Text>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('SPAN');
      expect(textNode).toHaveStyle(`
        font-size: 1rem;
      `);
    });

    it('should propagate additional style props', () => {
      render(<Text fontSize='2rem'>Mountain UI</Text>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('SPAN');
      expect(textNode).toHaveStyle(`
        font-size: 2rem;
      `);
    });
  });

  describe('Paragraph', () => {
    it('should render the corrent variant html tag and style', () => {
      render(<Paragraph variant='secondary'>Mountain UI</Paragraph>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('P');
      expect(textNode).toHaveStyle(`
        font-size: 0.8rem;
      `);
    });

    it('should propagate additional style props', () => {
      render(<Paragraph fontSize='1rem'>Mountain UI</Paragraph>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('P');
      expect(textNode).toHaveStyle(`
        font-size: 1rem;
      `);
    });
  });
});
