import styled, { css } from 'styled-components';

import { BaseElement, BaseElementProps } from '../../BaseElement';

export type ListProps = BaseElementProps & {
  /* Remove space between items */
  dense?: boolean;
  /* Use the list horizontally */
  horizontal?: boolean;
  /* List content */
  children: React.ReactNode;
};

const withSpace = css`
  gap: ${p => p.theme.space[5]};
`;

/**
 * The `List` component is used to render unordered and ordered lists.
 */
const List = styled(BaseElement)<ListProps>`
  display: flex;
  flex-direction: ${p => (p.horizontal ? 'row' : 'column')};
  ${p => !p.dense && withSpace}
`;

List.defaultProps = {
  as: 'ul',
  dense: false,
  horizontal: false
};

List.displayName = 'List';

export default List;
