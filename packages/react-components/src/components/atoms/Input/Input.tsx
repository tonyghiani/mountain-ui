import React, { forwardRef } from 'react';
import mnt from 'react-mnt';

import { MntParagraph, MntText } from '../Typography';

export const INPUT_STATUS = {
  default: 'mnt-input-default',
  success: 'mnt-input-success',
  warning: 'mnt-input-warning',
  error: 'mnt-input-error'
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

export type MntInputProps = Omit<React.ComponentProps<typeof StyledInput>, 'size'> & {
  /**
   * Caption text for the input.
   */
  caption?: string;
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
};

const StyledInput = mnt('input')`
  mnt-input-node
`;

const InputWrapper = mnt('div')`
  mnt-input-wrapper
`;

const InputContainer = mnt('div') <Pick<MntInputProps, 'status'>>`
  mnt-input
  ${props => INPUT_STATUS[props.status]}
`;

/**
 * Input component for accepting user input within a UI.
 * Supports various input types and styles, enhancing user interaction and enabling data submission or manipulation.
 */
export const MntInput = forwardRef<HTMLInputElement, MntInputProps>(
  ({ status = 'default', size = 'm', label, caption, children, id, className, ...props }, ref) => {
    const { input, wrapper } = INPUT_SIZES[size];
    const wrapperClasses = [wrapper, className].filter(Boolean).join(' ');

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
        ) : (
          inputNode
        )}
        {caption && (
          <MntParagraph className='text-caption text-[--text-input]'>{caption}</MntParagraph>
        )}
      </InputContainer>
    );
  }
);

MntInput.displayName = 'MntInput';
