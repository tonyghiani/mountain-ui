import React from 'react';

import { Paragraph } from '../../atoms';

import Code from './Code';

export default {
  title: 'Molecules/Code',
  component: Code
};

export const Basic = args => (
  <>
    <Code {...args} mb={6} />
    <Paragraph>
      The following function is inside a code tag <Code>const sumTwo = num =&gt; num + 2</Code> and
      is inlined with some text.
    </Paragraph>
  </>
);

Basic.args = {
  children: `function Code({ children, syntax, className, ...props }: CodeProps) {
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={syntax}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <CodeBox {...props}>
          <Pre as="pre" margin={0} overflow="auto" padding={5} tabIndex={0}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </CodeBox>
      )}
    </Highlight>
  );
};`
};

Basic.parameters = {
  jest: ['Code.test.js']
};
