import { mnt } from '../../../internals/create_mnt_component';

interface BoxProps { };

/**
 * Box used to define Layout components
 */
const Box = mnt<BoxProps>('div')``;

Box.displayName = 'Box';

export default Box;
