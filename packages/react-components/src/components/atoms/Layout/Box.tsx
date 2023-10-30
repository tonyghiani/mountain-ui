import { mnt } from 'mnt-internals';

interface MntBoxProps { };

/**
 * Box used to define Layout components
 */
export const MntBox = mnt('div') <MntBoxProps>``;

MntBox.displayName = 'MntBox';
