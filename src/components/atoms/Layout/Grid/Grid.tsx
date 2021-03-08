import styled from "styled-components"
import { grid } from "styled-system"

import Box, { BoxProps } from "../Box"

/**
 * Grid component
 */
const Grid = styled(Box) <BoxProps>`
  ${grid}
  display: grid;
`

Grid.displayName = 'Grid'

export default Grid