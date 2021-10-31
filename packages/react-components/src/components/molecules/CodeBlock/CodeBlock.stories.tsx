import React from 'react';

import CodeBlock from './CodeBlock';

export default {
  title: 'Molecules/CodeBlock',
  component: CodeBlock
};

export const Basic = args => <CodeBlock {...args} />;

Basic.args = {
  children: `function CodeBlock({ children, syntax, className, ...props }: CodeBlockProps) {
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={syntax}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <CodeBlockBox {...props}>
          <Pre as="pre" margin={0} overflow="auto" padding={5} tabIndex={0}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </CodeBlockBox>
      )}
    </Highlight>
  );
};`
};

Basic.parameters = {
  jest: ['CodeBlock.test.js']
};
