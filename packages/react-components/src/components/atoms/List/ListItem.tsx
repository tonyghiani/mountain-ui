import React from 'react';
import mnt from 'react-mnt';

export const LIST_ITEM_BASE_CLASS = `mnt-list-item`;

export interface MntListItemProps {
  /**
   * ListItem content
   */
  children: React.ReactNode;
  /**
   * Hide the default Icon for the rendered item
   */
  icon?: React.ReactNode;
}

const StyledListItem = mnt('li')`
  ${LIST_ITEM_BASE_CLASS}
`;

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
};

MntListItem.displayName = 'MntListItem';
