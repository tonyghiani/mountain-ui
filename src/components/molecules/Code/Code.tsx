/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import css from '@styled-system/css';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/duotoneLight";
import styled from 'styled-components';

import { Box } from '../../atoms/Layout';
import { Text } from '../../atoms/Typography';

export interface CodeProps {
  /* Code to show inside the block */
  children: string;
  /* Class name passed to the code block */
  className: string;
  /* Syntax to use when highlighing the code block */
  syntax: Language;
}

interface Token {
  content: string;
  empty?: boolean;
  types: string[];
};

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
};

type GetLineTokenProps = (args: LineTokenArgs) => LineTokenProps

interface CodeLineProps {
  getLineProps: GetLineTokenProps
  getTokenProps: GetLineTokenProps
  line: Token[]
  standalone?: boolean
};

interface RenderProps {
  getLineProps: GetLineTokenProps
  getTokenProps: GetLineTokenProps
  tokens: Token[][]
};

const CodeBox = styled(Box)(css({
  borderRadius: 4,
  boxShadow: 3,
  overflow: 'hidden',
  position: 'relative',
}))

const Pre = styled(Text)`
${css({
  backgroundColor: 'background.editor',
  margin: 0,
  padding: 5,
  ':focus-visible': {
    backgroundColor: 'background.editorFocus',
    outline: 'none'
  }
})}
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: background-color .3s ease;
  ::-webkit-scrollbar {
    display: none
  }
  :focus {
    outline: none;
  }
`

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

const Meta = styled(Box).attrs({ as: 'li' }) <{ uppercase?: boolean }>`
  text-transform: ${p => p.uppercase && 'uppercase'};
  ${css({
  color: 'text.code',
  fontSize: 'caption',
  fontWeight: 'bold',
  paddingX: 3,
  paddingY: 2
})}
`

const Divider = styled.li(css({
  backgroundColor: 'background.editorFocus',
  width: 1
}))

const STANDALONE_STYLE = {
  backgroundColor: 'background.editor',
  borderRadius: 2,
  boxShadow: 1,
  display: 'inline',
  padding: 1
}

const CodeLine = ({ standalone = false, line, getTokenProps, getLineProps }: CodeLineProps) => {
  const styles = standalone ? STANDALONE_STYLE : {}
  return <Text as="code" display="block" {...styles} {...getLineProps({ line })}>
    {line.map((token, key) => <span key={key} {...getTokenProps({ token, key })} />)}
  </Text >
}

/**
 * The `Code` component is used to represent blocks of code.
 */
const Code = ({ children, syntax, className, ...props }: CodeProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    })
  }, [children])

  const language = syntax || className.replace(/language-/, '') as Language;
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ tokens, getLineProps, getTokenProps }: RenderProps) => {
        const isMultiline = tokens.length > 1;
        const firstLine = tokens[0]

        if (!isMultiline) return <CodeLine standalone line={firstLine} getTokenProps={getTokenProps} getLineProps={getLineProps} />

        return <CodeBox {...props}>
          <MetaList role="list">
            <Meta cursor="pointer" role="presentation" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</Meta>
            <Divider />
            <Meta uppercase>{language}</Meta>
          </MetaList>
          <Pre as="pre" tabIndex={0}>
            {tokens.map((line, i) => <CodeLine key={i} line={line} getTokenProps={getTokenProps} getLineProps={getLineProps} />)}
          </Pre>
        </CodeBox>
      }}
    </Highlight>
  );
};

Code.defaultProps = {
  syntax: 'jsx',
};

Code.displayName = 'Code';

export default Code;