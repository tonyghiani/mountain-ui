import mnt from 'react-mnt';

export const CODE_BASE_CLASS = 'mnt-code';

export interface MntCodeProps { }

/**
 * Code component for displaying and styling code snippets.
 * Enhances code readability and presentation, ideal for showcasing programming examples within a UI.
 */
export const MntCode = mnt('code') <MntCodeProps>`
  ${CODE_BASE_CLASS}
`;

MntCode.displayName = 'MntCode';
