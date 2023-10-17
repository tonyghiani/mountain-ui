import React, { forwardRef } from 'react';
import { Assign, mnt } from 'mnt-internals';

import { MntParagraph, MntText } from '../Typography';

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

export type MntInputSize = keyof typeof INPUT_SIZES;
export type MntInputStatus = keyof typeof INPUT_STATUS;

export type MntInputProps = Assign<
  React.ComponentProps<typeof StyledInput>,
  {
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
    size?: MntInputSize;
    /**
     * Status of the input tag.
     */
    status?: MntInputStatus;
  }
>;

const StyledInput = mnt('input')`
  w-full text-dark font-medium border-0 bg-transparent placeholder:font-normal
`;

const InputWrapper = mnt('div')`
  w-full rounded-lg bg-[--bg-input] shadow-input focus-within:shadow-input-focus flex items-center flex-nowrap gap-2 transition duration-200
`;

const InputContainer = mnt<Pick<MntInputProps, 'status'>>('div')`
  w-full relative focus-within:[--text-input:theme(colors.blue.500)] focus-within:[--bg-input:theme(colors.blue.50)] focus-within:bg-opacity-20
  ${props => INPUT_STATUS[props.status]}
`;

/**
 * Input component for accepting user input within a UI.
 * Supports various input types and styles, enhancing user interaction and enabling data submission or manipulation.
 */
export const MntInput = forwardRef<HTMLInputElement, MntInputProps>(
  ({ status = 'default', size = 'm', label, caption, children, id, className, ...props }, ref) => {
    const { input, wrapper } = INPUT_SIZES[size];
    const wrapperClasses = [wrapper, className].filter(Boolean).join(' ')

    const inputNode = (
      <InputWrapper className={wrapperClasses}>
        {children}
        <StyledInput ref={ref} id={id} className={input} {...props} />
      </InputWrapper>
    );

    return (
      <InputContainer status={status}>
        {label ? (
          <MntText as='label' className='mb-2 text-[--text-input]' htmlFor={id}>
            {label}
            {inputNode}
          </MntText>
        ) : inputNode}
        {caption && (
          <MntParagraph className='text-caption text-[--text-input]'>{caption}</MntParagraph>
        )}
      </InputContainer>
    );
  }
);

MntInput.displayName = 'MntInput';
