import { mnt } from "../../../../internals/create_mnt_component"
import { Text, TextProps } from "../Text"

export interface ParagraphProps extends TextProps { }

const Paragraph = mnt<ParagraphProps>(Text).attrs(p => ({ as: 'p' }))``

Paragraph.displayName = 'Paragraph'

export default Paragraph