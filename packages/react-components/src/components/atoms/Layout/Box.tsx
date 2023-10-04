import { mnt } from 'mnt-internals';

interface MntBoxProps { };

/**
 * Box used to define Layout components
 */
export const MntBox = mnt<MntBoxProps>('div')``;

MntBox.displayName = 'MntBox';
