import { mnt } from '../../../../internals/mnt';

export interface ContainerProps { };

/**
 * Container component
 */
const Container = mnt<ContainerProps>('div')`
  max-w-screen-lg mx-auto px-4
`;

Container.displayName = 'Container';

export default Container;
