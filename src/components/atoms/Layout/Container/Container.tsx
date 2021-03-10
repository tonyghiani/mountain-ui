import styled from "styled-components"

import Box, { BoxProps } from "../Box"

/**
 * Container component
 */
const Container = styled(Box) <BoxProps>``

Container.defaultProps = {
  maxWidth: ['32em', '44em', '72em'],
  px: 3,
  mx: 'auto',
}

Container.displayName = 'Container'

export default Container