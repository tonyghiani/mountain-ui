import { mnt } from "../../../../internals/mnt"
import { AlignItems, JustifyContent, alignItems, justifyContent } from "../../../../internals/mnt_shared_props"

export const GRID_COLUMNS = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  8: 'grid-cols-8',
  12: 'grid-cols-12',
}

export type GridColumns = keyof typeof GRID_COLUMNS

export interface GridProps {
  /* The number of columns to split the grid */
  columns?: GridColumns
  /* Justify grid items */
  justifyContent?: JustifyContent
  /* Align grid items */
  alignItems?: AlignItems
}

/**
 * Grid component
 */
const Grid = mnt<GridProps>('div')`
  grid gap-3
  ${({ columns }) => columns ? GRID_COLUMNS[columns] : ''}
  ${justifyContent}
  ${alignItems}
`

Grid.displayName = 'Grid'

export default Grid