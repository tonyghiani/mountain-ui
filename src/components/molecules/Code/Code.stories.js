import React from 'react';

import Code from './Code';

export default {
  title: 'Molecules/Code',
  component: Code
};

export const Basic = args => <Code {...args} />;

Basic.args = {
  children: `<Highlight {...defaultProps} code={children} language={language}>
  {({ tokens, getLineProps, getTokenProps }) => (
    <Box position="relative">
      <SyntaxLabel strong color="light" position="absolute" top="-2rem" right="1.5rem" bg="dark" padding={2} borderTopLeftRadius={2} borderTopRightRadius={2}>{language}</SyntaxLabel>
      <Pre as="pre" padding={4} borderRadius={4} bg="dark" boxShadow={3} >
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <Text key={key} {...getTokenProps({ token, key })} {...props} />
            ))}
          </div>
        ))}
      </Pre>
    </Box>
  )}
</Highlight>`
};

Basic.parameters = {
  jest: ['Code.test.js']
};
