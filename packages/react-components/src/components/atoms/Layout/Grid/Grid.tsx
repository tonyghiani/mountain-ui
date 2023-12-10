import mnt from 'react-mnt';
import { AlignItems, alignItems, JustifyItems, justifyItems } from 'mnt-internals';

export const GRID_BASE_CLASS = 'grid gap-3';
export const GRID_COLUMNS = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12'
} as const;

export type MntGridColumns = keyof typeof GRID_COLUMNS;

interface GridProps {
  /**
   * The number of columns to split the grid
   */
  columns?: MntGridColumns;
  /**
   * Justify grid items
   */
  justifyItems?: JustifyItems;
  /**
   * Align grid items
   */
  alignItems?: AlignItems;
}

/**
 * Grid component for organizing content in a structured layout with rows and columns.
 * Facilitates alignment and distribution, ideal for creating organized and aesthetically pleasing interfaces.
 */
export const MntGrid = mnt('div')<GridProps>`
  ${GRID_BASE_CLASS}
  ${({ columns }) => columns && GRID_COLUMNS[columns]}
  ${justifyItems}
  ${alignItems}
`;

export type MntGridProps = React.ComponentPropsWithRef<typeof MntGrid>;

MntGrid.displayName = 'MntGrid';
