/* eslint-disable no-unused-vars */
import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';

import { Code } from '../../atoms';
import { Box } from '../../atoms/Layout';
import { Text } from '../../atoms/Typography';

export interface CodeBlockProps {
  /* CodeBlock to show inside the block */
  children: string;
  /* Class name passed to the code block */
  className?: string;
  /* Syntax to use when highlighing the code block */
  syntax: Language;
}

interface Token {
  content: string;
  empty?: boolean;
  types: string[];
}

interface LineTokenProps {
  children?: string;
  className: string;
  key?: React.Key;
  style?: Record<string, string | number | null>;
  [otherProp: string]: any;
}

interface LineTokenArgs {
  className?: string;
  key?: React.Key;
  line?: Token[];
  style?: Record<string, string | number | null>;
  token?: Token;
  [otherProp: string]: any;
}

type GetLineTokenProps = (args: LineTokenArgs) => LineTokenProps;

interface CodeBlockLineProps {
  getLineProps: GetLineTokenProps;
  getTokenProps: GetLineTokenProps;
  line: Token[];
  standalone?: boolean;
}

interface RenderProps {
  getLineProps: GetLineTokenProps;
  getTokenProps: GetLineTokenProps;
  tokens: Token[][];
}

const CodeBlockContainer = styled(Box)``;

CodeBlockContainer.defaultProps = {
  borderRadius: 4,
  border: '3px solid',
  borderColor: 'background.codeblock',
  boxShadow: 3,
  overflow: 'hidden',
  position: 'relative'
};

const Pre = styled(Text)`
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

Pre.defaultProps = {
  backgroundColor: 'background.codeblock',
  margin: 0,
  padding: 4
};

const Syntax = styled(Text)`
  text-transform: uppercase;
`;

Syntax.defaultProps = {
  position: 'absolute',
  top: 2,
  right: 2,
  paddingX: 3,
  paddingY: 2,
  borderRadius: 3,
  fontSize: 'caption',
  fontWeight: 'bold',
  color: 'text.light',
  backgroundColor: 'background.codeblockInfo'
};

const CodeBlockLine = ({ line, getTokenProps, getLineProps }: CodeBlockLineProps) => {
  return (
    <Text display='block' lineHeight='tall' {...getLineProps({ line })}>
      {line.map((token, key) => (
        <span key={key} {...getTokenProps({ token, key })} />
      ))}
    </Text>
  );
};

/**
 * The `CodeBlock` component is used to represent blocks of code.
 */
const CodeBlock = ({ children, syntax, className, ...props }: CodeBlockProps) => {
  const language = className?.replace(/language-/, '') || syntax;
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language as Language}>
      {({ tokens, getLineProps, getTokenProps }: RenderProps) => {
        return (
          <CodeBlockContainer {...props}>
            <Syntax>{language}</Syntax>
            <Pre as='pre' tabIndex={0}>
              <Code display='block'>
                {tokens.map((line, i) => (
                  <CodeBlockLine
                    key={i}
                    line={line}
                    getTokenProps={getTokenProps}
                    getLineProps={getLineProps}
                  />
                ))}
              </Code>
            </Pre>
          </CodeBlockContainer>
        );
      }}
    </Highlight>
  );
};

CodeBlock.defaultProps = {
  syntax: 'jsx',
  hasLineCount: false
};

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
