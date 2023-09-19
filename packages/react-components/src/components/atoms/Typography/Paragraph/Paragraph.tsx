import { createMntComponent } from "../../../../internals/create_mnt_component"
import { Text, TextProps } from "../Text"

export interface ParagraphProps extends TextProps { }

const Paragraph = createMntComponent<ParagraphProps>(Text)({ as: 'p' })

Paragraph.displayName = 'Paragraph'

export default Paragraph