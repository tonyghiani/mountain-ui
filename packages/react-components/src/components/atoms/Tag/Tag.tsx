import React from 'react';
import { mnt } from '../../../internals/mnt';

import { Text } from '../Typography';

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

export type TagSize = keyof typeof TAG_SIZES;
export type TagStatus = keyof typeof TAG_STATUS;
export type TagStatusSize = keyof typeof TAG_STATUS_SIZES;

const TagContainer = mnt<{ onClick?: React.MouseEventHandler }>('div')`
  relative inline-flex items-center rounded-[32px] hover:scale-[1.03] transition ease duration-300
  bg-gradient-to-br from-blue-500 to-blue-300
  ${({ onClick }) => (onClick ? 'cursor-pointer' : 'cursor-default')}
`;

export interface TagProps {
  /**
   * Tag text children
   */
  children: React.ReactNode;
  /**
   * Tag size
   */
  size?: TagSize;
  /**
   * Tag status
   */
  status?: TagStatus;
}

interface TagStatusProps {
  /**
   * Tag status size
   */
  size: TagStatusSize;
  /**
   * Tag status
   */
  status: TagStatus;
}

/**
 * Tag component for visually representing and categorizing items or content. 
 * Enhances organization and provides a quick way to identify or filter specific elements within a UI.
 */
export const Tag = ({ children, size = 'm', status, ...props }: TagProps) => {
  const { label, wrapper } = TAG_SIZES[size];

  return (
    <TagContainer className={wrapper} {...props}>
      <Text bold className={`text-light ${label}`}>
        {children}
      </Text>
      {!!status && <TagStatus status={status} size={size} />}
    </TagContainer>
  );
};

const TagStatus = mnt<TagStatusProps>('div')`
  absolute rounded-full border-light border-solid border-2
  ${({ size }) => TAG_STATUS_SIZES[size]}
  ${({ status }) => TAG_STATUS[status]}
`;

Tag.displayName = 'Tag';
