import React from 'react';
import { ArrowCircleRight } from '@mountain-ui/icons';
import styled from 'styled-components';

import { BaseElement, BaseElementProps } from '../../BaseElement';

export type ListItemProps = BaseElementProps & {
  /*  Hide the default Icon for the rendered item */
  hideIcon: boolean;
  /*  Hide the default Icon for the rendered item */
  icon: React.ElementType;
  /*  ListItem content */
  children: React.ReactNode;
};

export const StyledListItem = styled(BaseElement).attrs<BaseElementProps>({ as: 'li' })`
  display: flex;
  align-items: flex-start;
`;

/**
 * The `ListItem` serves as single item rendered in a list
 */
function ListItem({ hideIcon, icon: Icon, children, ...props }: ListItemProps) {
  return (
    <StyledListItem {...props}>
      {hideIcon ? null : <Icon aria-label='Item icon' color='primary.main' fontSize={3} mr={4} />}
      {children}
    </StyledListItem>
  );
}

ListItem.defaultProps = {
  hideIcon: false,
  icon: ArrowCircleRight
};

ListItem.displayName = 'ListItem';

export default ListItem;
