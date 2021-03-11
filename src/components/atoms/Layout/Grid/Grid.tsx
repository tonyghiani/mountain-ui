import styled from "styled-components"
import { grid, GridProps as GProps } from "styled-system"

import Box, { BoxProps } from "../Box"

export type GridProps = BoxProps & GProps

/**
 * Grid component
 */
const Grid = styled(Box) <GridProps>`
  ${grid}
  display: grid;
`

Grid.displayName = 'Grid'

export default Grid