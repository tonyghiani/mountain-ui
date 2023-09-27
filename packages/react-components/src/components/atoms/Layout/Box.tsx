import { mnt } from '../../../internals/mnt';

interface BoxProps { };

/**
 * Box used to define Layout components
 */
export const Box = mnt<BoxProps>('div')``;

Box.displayName = 'Box';
