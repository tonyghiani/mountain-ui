import { mnt } from '../../../internals/mnt';

interface BoxProps { };

/**
 * Box used to define Layout components
 */
const Box = mnt<BoxProps>('div')``;

Box.displayName = 'Box';

export default Box;
