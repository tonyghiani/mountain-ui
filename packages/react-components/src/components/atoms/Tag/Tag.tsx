import React from 'react';
import mnt from 'react-mnt';

import { MntText } from '../Typography';

const TAG_SIZES = {
  xs: {
    label: 'text-caption',
    wrapper: 'h-7 px-3 py-1'
  },
  s: {
    label: 'text-secondaryBody',
    wrapper: 'h-8 px-4 py-2'
  },
  m: {
    label: 'text-primary',
    wrapper: 'h-9 px-4 py-2'
  },
  l: {
    label: 'text-h5',
    wrapper: 'h-10 px-4 py-2'
  },
  xl: {
    label: 'text-h5',
    wrapper: 'h-11 px-5 py-3'
  }
} as const;

export const TAG_STATUS = {
  success: 'bg-emerald-400',
  warning: 'bg-yellow-400',
  error: 'bg-red-400'
} as const;

const TAG_STATUS_SIZES = {
  xs: 'w-2.5 h-2.5 -top-px -right-px',
  s: 'w-3 h-3 -top-px -right-px',
  m: 'w-3.5 h-3.5 -top-[1.5px] -right-[1.5px]',
  l: 'w-4 h-4 -top-[1.5px] -right-[1.5px]',
  xl: 'w-[18px] h-[18px] -top-0.5 -right-0.5'
} as const;

export type MntTagSize = keyof typeof TAG_SIZES;
export type MntTagStatus = keyof typeof TAG_STATUS;
export type MntTagStatusSize = keyof typeof TAG_STATUS_SIZES;

const TagContainer = mnt('div')`
  mnt-tag
  ${({ onClick }) => (onClick ? 'cursor-pointer' : 'cursor-default')}
`;

export interface MntTagProps extends React.ComponentProps<typeof TagContainer> {
  /**
   * Tag size
   */
  size?: MntTagSize;
  /**
   * Tag status
   */
  status?: MntTagStatus;
}

interface TagStatusProps {
  /**
   * Tag status size
   */
  size: MntTagStatusSize;
  /**
   * Tag status
   */
  status: MntTagStatus;
}

/**
 * Tag component for visually representing and categorizing items or content.
 * Enhances organization and provides a quick way to identify or filter specific elements within a UI.
 */
export const MntTag = ({ children, className, size = 'm', status, ...props }: MntTagProps) => {
  const { label, wrapper } = TAG_SIZES[size];
  const containerClasses = [wrapper, className].filter(Boolean).join(' ');

  return (
    <TagContainer className={containerClasses} {...props}>
      <MntText bold className={`text-light ${label}`}>
        {children}
      </MntText>
      {!!status && <TagStatus status={status} size={size} />}
    </TagContainer>
  );
};

const TagStatus = mnt('div')<TagStatusProps>`
  mnt-tag-status
  ${({ size }) => TAG_STATUS_SIZES[size]}
  ${({ status }) => TAG_STATUS[status]}
`;

MntTag.displayName = 'MntTag';
