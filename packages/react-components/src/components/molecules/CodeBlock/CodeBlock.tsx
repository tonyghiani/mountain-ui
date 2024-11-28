import React from 'react';
import mnt from 'react-mnt';
import { isString } from '@mountain-ui/utils';
import { Highlight, Language, themes } from 'prism-react-renderer';

import { MntCode } from './../../atoms/Code';

export interface CodeBlockProps {
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

const CodeBlockLine = ({ line, getTokenProps, getLineProps }: CodeBlockLineProps) => {
  return (
    <p {...getLineProps({ line })}>
      {line.map((token, key) => (
        <span key={key} {...getTokenProps({ token })} />
      ))}
    </p>
  );
};

export type MntCodeBlockProps = React.ComponentPropsWithRef<typeof CodeBlockContainer> &
  CodeBlockProps;

/**
 * CodeBlock component for rendering and styling a block of code.
 * Enhances code presentation, readability, and formatting within a UI, ideal for showcasing programming snippets or examples.
 */
export const MntCodeBlock = ({ children, syntax = 'jsx', ...props }: MntCodeBlockProps) => {
  const code = (isString(children) ? children.trim() : children) as string;

  return (
    <Highlight theme={themes.nightOwl} code={code} language={syntax as Language}>
      {({ tokens, getLineProps, getTokenProps }: RenderProps) => {
        return (
          <CodeBlockContainer {...props}>
            <span className='mnt-codeblock-syntax'>{syntax}</span>
            <pre className='mnt-codeblock-pre' tabIndex={0}>
              <MntCode>
                {tokens.map((line, i) => (
                  <CodeBlockLine
                    key={i}
                    line={line}
                    getTokenProps={getTokenProps}
                    getLineProps={getLineProps}
                  />
                ))}
              </MntCode>
            </pre>
          </CodeBlockContainer>
        );
      }}
    </Highlight>
  );
};

MntCodeBlock.displayName = 'MntCodeBlock';
