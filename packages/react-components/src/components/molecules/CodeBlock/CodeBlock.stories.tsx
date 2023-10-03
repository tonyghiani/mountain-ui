import { Meta, StoryObj } from '@storybook/react';

import { MntCodeBlock } from './CodeBlock';

const meta = {
  title: 'Molecules/MntCodeBlock',
  component: MntCodeBlock,
  tags: ['autodocs']
} satisfies Meta<typeof MntCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    syntax: 'jsx',
    children: `/**
 * The CodeBlock component is used to represent blocks of code.
 */
function CodeBlock({ children, syntax, className, ...props }: CodeBlockProps) {
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
  }
};
