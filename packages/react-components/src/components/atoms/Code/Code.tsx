import mnt from 'react-mnt';

export const CODE_BASE_CLASS = 'mnt-code';

/**
 * Code component for displaying and styling code snippets.
 * Enhances code readability and presentation, ideal for showcasing programming examples within a UI.
 */
export const MntCode = mnt('code')`
  ${CODE_BASE_CLASS}
`;

export type MntCodeProps = React.ComponentPropsWithRef<typeof MntCode>;

MntCode.displayName = 'MntCode';
