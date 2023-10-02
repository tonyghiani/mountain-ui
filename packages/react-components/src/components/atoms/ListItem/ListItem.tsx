import React from 'react';
import { mnt } from '../../../internals/mnt';

export const LIST_ITEM_BASE_CLASS = `flex items-start gap-4`;

export interface ListItemProps {
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
 * The `ListItem` serves as single item rendered in a list
 */
export const ListItem = ({ children, icon, ...props }: ListItemProps) => {
  return (
    <StyledListItem {...props}>
      {icon}
      {children}
    </StyledListItem>
  );
}

ListItem.displayName = 'ListItem';