import React from 'react';
import css from '@styled-system/css';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/duotoneLight";
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

const CodeBox = styled(Box)(css({
  borderRadius: 4,
  boxShadow: 3,
  overflow: 'hidden',
  position: 'relative',
}))

const Pre = styled(Text)`
  background-color: ${p => p.theme.colors.background.editor};
  transition: background-color .3s ease;
  ::-webkit-scrollbar {
    display: none
  }
  :focus {
    background-color: ${p => p.theme.colors.background.editorFocus};
    outline: none;
  }
`

/**
 * The `Code` component is used to represent blocks of code.
 */
function Code({ children, syntax, className, ...props }: CodeProps) {
  const language = syntax || className.replace(/language-/, '') as Language;
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <CodeBox {...props}>
          <MetaList>
            <Meta>
              {language}
            </Meta>
            <Divider />
            <Meta>
              copy
            </Meta>
          </MetaList>
          <Pre as="pre" margin={0} overflow="overlay" padding={5} tabIndex={0}>
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
};

Code.defaultProps = {
  syntax: 'jsx',
};

const MetaList = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  ${css({
  backgroundColor: 'background.editor',
  borderBottomLeftRadius: 4,
  borderTopRightRadius: 4,
  boxShadow: 3
})}
`

const Meta = styled.li(css({
  paddingY: 2,
  paddingX: 3,
  color: 'text.code',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: 'caption'
}))

const Divider = styled.li(css({
  width: 1,
  backgroundColor: 'background.editorFocus'
}))

Code.displayName = 'Code';

export default Code;