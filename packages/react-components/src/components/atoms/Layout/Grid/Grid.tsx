import { mnt } from "../../../../internals/create_mnt_component"

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
}

/**
 * Grid component
 */
const Grid = mnt<GridProps>('div')`
  grid gap-3
  ${({ columns }) => columns ? GRID_COLUMNS[columns] : ''}
`

Grid.displayName = 'Grid'

export default Grid