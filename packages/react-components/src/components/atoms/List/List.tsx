import styled, { css } from 'styled-components';

import { BaseElement, BaseElementProps } from '../../BaseElement';
import { StyledListItem } from '../ListItem/ListItem';

export type ListProps = BaseElementProps & {
  /* Remove space between items */
  dense?: boolean;
  /* List content */
  children: React.ReactNode;
};

const withSpace = css`
  & ${StyledListItem}:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

/**
 * The `List` component is used to render unordered and ordered lists.
 */
const List = styled(BaseElement)<ListProps>`
  ${p => !p.dense && withSpace}
`;

List.defaultProps = {
  as: 'ul',
  dense: false
};

List.displayName = 'List';

export default List;
