import { mnt } from "../../../../internals/mnt"
import { Text, TextProps } from "../Text"

export interface ParagraphProps extends TextProps { }

const Paragraph = mnt<ParagraphProps>(Text).attrs({ as: 'p' })``

Paragraph.displayName = 'Paragraph'

export default Paragraph