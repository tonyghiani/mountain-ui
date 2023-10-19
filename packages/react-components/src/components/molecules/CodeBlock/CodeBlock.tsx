/* eslint-disable no-unused-vars */
import React from 'react';
import { mnt } from 'mnt-internals';
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

type RenderProps = Parameters<React.ComponentProps<typeof Highlight>['children']>[0]
type Token = RenderProps['tokens'][0]
type CodeBlockLineProps = Pick<RenderProps, 'getTokenProps' | 'getLineProps'> & { line: Token }


const CodeBlockContainer = mnt('div')`
  relative overflow-hidden rounded-xl border-4 border-solid border-blue-950 shadow-xl
`;

const Syntax = MntText

const CodeBlockLine = ({ line, getTokenProps, getLineProps }: CodeBlockLineProps) => {
  return (
    <p className="text-body leading-6.5" {...getLineProps({ line })}>
      {line.map((token, key) => (
        <span key={key} {...getTokenProps({ token, key })} />
      ))}
    </p>
  );
};

/**
 * CodeBlock component for rendering and styling a block of code. 
 * Enhances code presentation, readability, and formatting within a UI, ideal for showcasing programming snippets or examples.
 */
export const MntCodeBlock = ({ children = '', syntax = 'jsx', className, ...props }: MntCodeBlockProps) => {
  const language = className?.replace(/language-/, '') || syntax;

  return (
    <Highlight
      theme={themes.nightOwl}
      code={children.trim()}
      language={language as Language}
    >
      {({ tokens, getLineProps, getTokenProps }: RenderProps) => {
        return (
          <CodeBlockContainer {...props}>
            <Syntax bold className='absolute top-1 right-1 px-2 py-1.5 rounded-md uppercase text-caption text-light bg-sky-700'>{language}</Syntax>
            <pre className="mnt-scrollbar overflow-auto m-0 p-4 bg-blue-950" tabIndex={0}>
              <code className="block text-body">
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
}

MntCodeBlock.displayName = 'MntCodeBlock';
