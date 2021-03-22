import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styled from 'styled-components';

import { Box } from '../../atoms/Layout';
import { Text } from '../../atoms/Typography';

export interface CodeProps {
  /* Syntax to use when highlighing the code block */
  syntax: Language;
  /* Code to show inside the block */
  children: string;
  /* Class name passed to the code block */
  className: string;
}

const Pre = styled(Text)`
  ::-webkit-scrollbar {
    display: none
  }
`

const SyntaxLabel = styled(Text)`
  text-transform: uppercase
`

/**
 * The `Code` component is used to represent blocks of code.
 */
function Code({ children, syntax, className, ...props }: CodeProps) {
  const language = syntax || className.replace(/language-/, '') as Language;
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <Box position="relative" marginTop={6} padding={5} borderRadius={4} bg="background.editor" boxShadow={3} {...props}>
          <SyntaxLabel
            strong
            color="text.light"
            position="absolute"
            top="-2rem"
            right="1.5rem"
            bg="background.editor"
            padding={3}
            borderTopLeftRadius={2}
            borderTopRightRadius={2}
          >
            {language}
          </SyntaxLabel>
          <Pre as="pre" margin={0} overflow="overlay">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </Box>
      )}
    </Highlight>
  );
};

Code.defaultProps = {
  syntax: 'jsx',
};

Code.displayName = 'Code';

export default Code;