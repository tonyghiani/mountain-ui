import { mnt } from "../../../../internals/mnt"
import { MntText, MntTextProps } from "../Text"

export interface MntParagraphProps extends MntTextProps { }

/**
 * Paragraph component for displaying text content in a structured and styled manner. 
 * Enhances readability and presentation of textual information within a UI.
 */
export const MntParagraph = mnt<MntParagraphProps>(MntText).attrs({ as: 'p' })``

MntParagraph.displayName = 'MntParagraph'