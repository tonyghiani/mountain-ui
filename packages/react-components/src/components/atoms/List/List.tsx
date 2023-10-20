import { mnt } from 'mnt-internals';

export const LIST_BASE_CLASS = 'flex';

export interface MntListProps {
  /**
   * Remove space between items 
   */
  dense?: boolean;
  /**
   * Use the list horizontally 
   */
  horizontal?: boolean;
};

/**
 * List component for organizing and displaying a collection of items in a structured manner. 
 * Provides flexibility in layout and style, improving content presentation within a UI.
 */
export const MntList = mnt<MntListProps>('ul')`
  ${LIST_BASE_CLASS}
  ${({ horizontal = false }) => horizontal ? 'flex-row' : 'flex-col'}
  ${({ dense = false }) => !dense && 'gap-4'}
`

MntList.displayName = 'MntList';

