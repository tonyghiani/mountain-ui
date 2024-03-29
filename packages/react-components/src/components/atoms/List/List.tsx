import mnt from 'react-mnt';

export const LIST_BASE_CLASS = 'mnt-list';

export interface ListProps {
  /**
   * Remove space between items
   */
  dense?: boolean;
  /**
   * Use the list horizontally
   */
  horizontal?: boolean;
}

/**
 * List component for organizing and displaying a collection of items in a structured manner.
 * Provides flexibility in layout and style, improving content presentation within a UI.
 */
export const MntList = mnt('ul')<ListProps>`
  ${LIST_BASE_CLASS}
  ${({ horizontal = false }) => (horizontal ? 'flex-row' : 'flex-col')}
  ${({ dense = false }) => !dense && 'gap-4'}
`;

export type MntListProps = React.ComponentPropsWithRef<typeof MntList>;

MntList.displayName = 'MntList';
