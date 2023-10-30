import { AlignItems, alignItems, JustifyItems, justifyItems, mnt } from 'mnt-internals';

export const GRID_BASE_CLASS = 'grid gap-3'
export const GRID_COLUMNS = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  8: 'grid-cols-8',
  12: 'grid-cols-12',
} as const;

export type MntGridColumns = keyof typeof GRID_COLUMNS

export interface MntGridProps {
  /**
   * The number of columns to split the grid
   */
  columns?: MntGridColumns
  /**
   * Justify grid items
   */
  justifyItems?: JustifyItems
  /**
   * Align grid items
   */
  alignItems?: AlignItems
}

/**
 * Grid component for organizing content in a structured layout with rows and columns.
 * Facilitates alignment and distribution, ideal for creating organized and aesthetically pleasing interfaces.
 */
export const MntGrid = mnt('div') <MntGridProps>`
  ${GRID_BASE_CLASS}
  ${({ columns }) => columns && GRID_COLUMNS[columns]}
  ${justifyItems}
  ${alignItems}
`

MntGrid.displayName = 'MntGrid'
