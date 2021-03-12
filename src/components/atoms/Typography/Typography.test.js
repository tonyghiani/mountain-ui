import React from 'react';
import { render, screen } from 'mui-testing-tools';

import { HeadingStory } from './Heading/Heading.stories';
import { ParagraphStory } from './Paragraph/Paragraph.stories';
import { TextStory } from './Text/Text.stories';
import BaseTypography from './BaseTypography';

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
      render(<HeadingStory variant='h3'>Mountain UI</HeadingStory>);
      const textNode = screen.getByRole('heading');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('H3');
      expect(textNode).toHaveStyle(`
        color: #0C0E0D;
        font-size: 2.4rem;
        line-height: 1.25em;
        font-weight: 700;
      `);
    });

    it('should propagate additional style props', () => {
      render(
        <HeadingStory variant='h3' color='#F0F0F0'>
          Mountain UI
        </HeadingStory>
      );
      const textNode = screen.getByRole('heading');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('H3');
      expect(textNode).toHaveStyle(`
        color: #F0F0F0;
        font-size: 2.4rem;
        line-height: 1.25em;
        font-weight: 700;
      `);
    });
  });

  describe('Text', () => {
    it('should render the corrent variant html tag and style', () => {
      render(<TextStory variant='primary'>Mountain UI</TextStory>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('SPAN');
      expect(textNode).toHaveStyle(`
        color: #0C0E0D;
        font-size: 1rem;
      `);
    });

    it('should propagate additional style props', () => {
      render(<TextStory fontSize='2rem'>Mountain UI</TextStory>);
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
      render(<ParagraphStory variant='secondary'>Mountain UI</ParagraphStory>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('P');
      expect(textNode).toHaveStyle(`
        color: #6E7A83;
        font-size: 0.8rem;
      `);
    });

    it('should propagate additional style props', () => {
      render(<ParagraphStory fontSize='1rem'>Mountain UI</ParagraphStory>);
      const textNode = screen.getByText('Mountain UI');
      expect(textNode).toBeInTheDocument();
      expect(textNode.tagName).toEqual('P');
      expect(textNode).toHaveStyle(`
        font-size: 1rem;
      `);
    });
  });
});
