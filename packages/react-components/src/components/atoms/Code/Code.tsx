import { mnt } from '../../../internals/mnt';

export const CODE_BASE_CLASS = 'bg-blue-950 text-bold text-secondaryBody text-light inline-block px-1 rounded';

export interface MntCodeProps { };

/**
 * Code component for displaying and styling code snippets. 
 * Enhances code readability and presentation, ideal for showcasing programming examples within a UI.
 */
export const MntCode = mnt<MntCodeProps>('code')`
  ${CODE_BASE_CLASS}
`;

MntCode.displayName = 'MntCode';

