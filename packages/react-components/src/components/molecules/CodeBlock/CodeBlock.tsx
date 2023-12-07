/* eslint-disable no-unused-vars */
import React from 'react';
import mnt from 'react-mnt';
import { Highlight, Language, themes } from 'prism-react-renderer';

import { MntText } from '../../atoms/Typography';

export interface MntCodeBlockProps {
  /**
   * CodeBlock to show inside the block
   */
  children: string;
  /**
   * Class name passed to the code block
   */
  className?: string;
  /**
   * Syntax to use when highlighing the code block
   */
  syntax: Language;
}

type RenderProps = Parameters<React.ComponentProps<typeof Highlight>['children']>[0];
type Token = RenderProps['tokens'][0];
type CodeBlockLineProps = Pick<RenderProps, 'getTokenProps' | 'getLineProps'> & { line: Token };

const CodeBlockContainer = mnt('div')`
  mnt-codeblock
`;

const Syntax = MntText;

const CodeBlockLine = ({ line, getTokenProps, getLineProps }: CodeBlockLineProps) => {
  return (
    <p className='text-body leading-6.5' {...getLineProps({ line })}>
      {line.map((token, key) => (
        <span key={key} {...getTokenProps({ token })} />
      ))}
    </p>
  );
};

/**
 * CodeBlock component for rendering and styling a block of code.
 * Enhances code presentation, readability, and formatting within a UI, ideal for showcasing programming snippets or examples.
 */
export const MntCodeBlock = ({
  children = '',
  syntax = 'jsx',
  className,
  ...props
}: MntCodeBlockProps) => {
  const language = className?.replace(/language-/, '') || syntax;

  return (
    <Highlight theme={themes.nightOwl} code={children.trim()} language={language as Language}>
      {({ tokens, getLineProps, getTokenProps }: RenderProps) => {
        return (
          <CodeBlockContainer {...props}>
            <Syntax
              bold
              className='mnt-codeblock-syntax'
            >
              {language}
            </Syntax>
            <pre className='mnt-codeblock-pre' tabIndex={0}>
              <code className='block text-body'>
                {tokens.map((line, i) => (
                  <CodeBlockLine
                    key={i}
                    line={line}
                    getTokenProps={getTokenProps}
                    getLineProps={getLineProps}
                  />
                ))}
              </code>
            </pre>
          </CodeBlockContainer>
        );
      }}
    </Highlight>
  );
};

MntCodeBlock.displayName = 'MntCodeBlock';
