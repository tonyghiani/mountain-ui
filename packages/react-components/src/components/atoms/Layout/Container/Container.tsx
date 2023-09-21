import { mnt } from '../../../../internals/create_mnt_component';

export interface ContainerProps { };

/**
 * Container component
 */
const Container = mnt<ContainerProps>('div')`
  max-w-screen-lg mx-auto px-4
`;

Container.displayName = 'Container';

export default Container;
