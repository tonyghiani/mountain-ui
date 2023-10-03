import { mnt } from '../../../internals/mnt';

interface MntBoxProps { };

/**
 * Box used to define Layout components
 */
export const MntBox = mnt<MntBoxProps>('div')``;

MntBox.displayName = 'MntBox';
