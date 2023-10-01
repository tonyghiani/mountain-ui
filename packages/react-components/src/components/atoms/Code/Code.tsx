import { mnt } from '../../../internals/mnt';

export const CODE_BASE_CLASS = 'bg-blue-950 text-bold text-secondaryBody text-light inline-block px-1 rounded';

export interface CodeProps { };

/**
 * Code component for displaying and styling code snippets. 
 * Enhances code readability and presentation, ideal for showcasing programming examples within a UI.
 */
export const Code = mnt<CodeProps>('code')`
  ${CODE_BASE_CLASS}
`;

Code.displayName = 'Code';

