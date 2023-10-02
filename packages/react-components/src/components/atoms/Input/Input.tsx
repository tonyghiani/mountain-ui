import React, { forwardRef } from 'react';

import { Paragraph, Text } from '../Typography';
import { Assign, mnt } from '../../../internals/mnt';

export const INPUT_STATUS = {
  default: '[--text-input:theme(colors.gray.500)] [--bg-input:theme(colors.gray.50)]',
  success: '[--text-input:theme(colors.green.600)] [--bg-input:theme(colors.emerald.50)]',
  warning: '[--text-input:theme(colors.yellow.600)] [--bg-input:theme(colors.yellow.50)]',
  error: '[--text-input:theme(colors.red.600)] [--bg-input:theme(colors.red.50)]'
} as const;

const INPUT_SIZES = {
  xs: {
    input: 'text-caption',
    wrapper: 'h-9 px-3 py-2'
  },
  s: {
    input: 'text-secondaryBody',
    wrapper: 'h-10 px-3 py-4'
  },
  m: {
    input: 'text-primary',
    wrapper: 'h-11 px-4 py-3'
  },
  l: {
    input: 'text-primary',
    wrapper: 'h-12 px-5 py-4'
  },
  xl: {
    input: 'text-h5',
    wrapper: 'h-14 px-5 py-4'
  }
} as const;

export type InputSize = keyof typeof INPUT_SIZES;
export type InputStatus = keyof typeof INPUT_STATUS;

export type InputProps = Assign<React.ComponentProps<typeof StyledInput>, {
  /**
   * Children components within the input container.
   */
  children?: React.ReactNode;
  /**
   * Caption text for the input.
   */
  caption?: string;
  /**
   * Unique identifier for the input.
   */
  id?: string;
  /**
   * Label text for the input.
   */
  label?: string;
  /**
   * Size of the input tag.
   */
  size?: InputSize;
  /**
   * Status of the input tag.
   */
  status?: InputStatus;
}>;

const StyledInput = mnt('input')`
  w-full font-medium border-0 bg-transparent placeholder:font-normal
`;

const InputWrapper = mnt('div')`
  w-full rounded-lg bg-[--bg-input] shadow-input focus-within:shadow-input-focus flex items-center flex-nowrap gap-2 transition duration-200
`;

const InputContainer = mnt<Pick<InputProps, 'status'>>('div')`
  w-full relative focus-within:[--text-input:theme(colors.blue.500)] focus-within:[--bg-input:theme(colors.blue.50)] focus-within:bg-opacity-20
  ${props => INPUT_STATUS[props.status]}
`;

/**
 * Input component for accepting user input within a UI.
 * Supports various input types and styles, enhancing user interaction and enabling data submission or manipulation.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ status = 'default', size = 'm', label, caption, children, id, ...props }, ref) => {
    const { input, wrapper } = INPUT_SIZES[size];

    return (
      <InputContainer status={status}>
        {label && (
          <Text as='label' className='mb-2 text-[--text-input]' htmlFor={id}>
            {label}
          </Text>
        )}
        <InputWrapper className={wrapper}>
          {children}
          <StyledInput ref={ref} id={id} className={input} {...props} />
        </InputWrapper>
        {caption && <Paragraph className='text-caption text-[--text-input]'>{caption}</Paragraph>}
      </InputContainer>
    );
  }
);
