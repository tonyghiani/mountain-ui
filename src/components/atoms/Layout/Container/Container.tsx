import styled from "styled-components"

import Box, { BoxProps } from "../Box"

/**
 * Container component
 */
const Container = styled(Box) <BoxProps>``

Container.defaultProps = {
  maxWidth: ['mobile', 'tablet', 'desktop'],
  px: 3,
  mx: 'auto',
}

Container.displayName = 'Container'

export default Container