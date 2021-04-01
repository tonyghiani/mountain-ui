import styled from "styled-components"

import Box, { BoxProps } from "../Box"

export type ContainerProps = BoxProps

/**
 * Container component
 */
const Container = styled(Box) <ContainerProps>``

Container.defaultProps = {
  maxWidth: [512, 720, 1152],
  px: 3,
  mx: 'auto',
}

Container.displayName = 'Container'

export default Container