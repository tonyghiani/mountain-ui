import React from 'react';
import styled from 'styled-components';

import { BaseElement, BaseElementProps } from '../../BaseElement';

export type ListItemProps = BaseElementProps & {
  /*  Hide the default Icon for the rendered item */
  icon?: React.ReactNode;
  /*  ListItem content */
  children: React.ReactNode;
};

export const StyledListItem = styled(BaseElement).attrs<BaseElementProps>({ as: 'li' })`
  display: flex;
  align-items: flex-start;
  gap: ${p => p.theme.space[4]};
`;

/**
 * The `ListItem` serves as single item rendered in a list
 */
function ListItem({ icon, children, ...props }: ListItemProps) {
  return (
    <StyledListItem {...props}>
      {icon}
      {children}
    </StyledListItem>
  );
}

ListItem.displayName = 'ListItem';

export default ListItem;
