import { mnt } from "../../../../internals/mnt"
import { Text, TextProps } from "../Text"

export interface ParagraphProps extends TextProps { }

/**
 * Paragraph component for displaying text content in a structured and styled manner. 
 * Enhances readability and presentation of textual information within a UI.
 */
export const Paragraph = mnt<ParagraphProps>(Text).attrs({ as: 'p' })``

Paragraph.displayName = 'Paragraph'