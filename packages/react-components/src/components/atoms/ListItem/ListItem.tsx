import React from 'react';
import { mnt } from '../../../internals/mnt';

export const LIST_ITEM_BASE_CLASS = `flex items-start gap-4`;

export interface MntListItemProps {
  /**
   * ListItem content 
   */
  children: React.ReactNode;
  /**
   * Hide the default Icon for the rendered item 
   */
  icon?: React.ReactNode;
};

const StyledListItem = mnt('li')`
  ${LIST_ITEM_BASE_CLASS}
`

/**
 * The `MntListItem` serves as single item rendered in a list
 */
export const MntListItem = ({ children, icon, ...props }: MntListItemProps) => {
  return (
    <StyledListItem {...props}>
      {icon}
      {children}
    </StyledListItem>
  );
}

MntListItem.displayName = 'MntListItem';