import mnt from 'react-mnt';

import { MntText, MntTextProps } from '../Text';

export interface MntParagraphProps extends MntTextProps {}

/**
 * Paragraph component for displaying text content in a structured and styled manner.
 * Enhances readability and presentation of textual information within a UI.
 */
export const MntParagraph = mnt(MntText).params<MntParagraphProps>({ as: 'p' })``;
