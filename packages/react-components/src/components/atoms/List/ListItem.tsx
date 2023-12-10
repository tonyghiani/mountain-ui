import React from 'react';
import mnt from 'react-mnt';

export const LIST_ITEM_BASE_CLASS = `mnt-list-item`;

interface ListItemProps {
  /**
   * Hide the default Icon for the rendered item
   */
  icon?: React.ReactNode;
}

const StyledListItem = mnt('li')<ListItemProps>`
  ${LIST_ITEM_BASE_CLASS}
`;

export type MntListItemProps = React.ComponentPropsWithRef<typeof StyledListItem>;

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
