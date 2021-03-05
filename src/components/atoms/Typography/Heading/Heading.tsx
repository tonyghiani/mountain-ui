import styled from "styled-components"
import { variant } from "styled-system"

import BaseTypography, { BaseTypographyProps } from "../BaseTypography"

export type HeadingProps = BaseTypographyProps & {
  /* Heading variant */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = styled(BaseTypography).attrs<HeadingProps>(p => ({ as: p.as || p.variant }))<HeadingProps>(
  variant({
    scale: 'variants.typography.heading',
    variants: {
      h1: {
        color: 'text.primary',
        fontSize: 'h1',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h2: {
        color: 'text.primary',
        fontSize: 'h2',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h3: {
        color: 'text.primary',
        fontSize: 'h3',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h4: {
        color: 'text.primary',
        fontSize: 'h4',
        lineHeight: 'normal',
        fontWeight: 'bold'
      },
      h5: {
        color: 'text.primary',
        fontSize: 'h5',
        lineHeight: 'normal',
        fontWeight: 'bold'
      },
      h6: {
        color: 'text.primary',
        fontSize: 'h6',
        lineHeight: 'normal',
        fontWeight: 'bold'
      }
    }
  })
)

Heading.displayName = 'Heading'
Heading.defaultProps = {
  variant: 'h1'
}

export default Heading