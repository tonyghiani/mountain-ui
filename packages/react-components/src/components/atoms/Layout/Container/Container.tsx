import mnt from 'react-mnt';

export const CONTAINER_BASE_CLASS = 'mx-auto px-4';
export const CONTAINER_SIZES = {
  article: 'max-w-3xl',
  large: 'max-w-screen-lg',
  wide: 'max-w-screen-xl',
  ultra: 'max-w-screen-2xl'
} as const;

export type MntContainerSize = keyof typeof CONTAINER_SIZES;

export interface ContainerProps {
  /**
   * The maximum size the container should take on the screen.
   */
  size?: MntContainerSize;
}

/**
 * MntContainer component for wrapping and styling content within a designated area.
 * Helps in organizing and managing the layout of components and elements.
 */
export const MntContainer = mnt('div')<ContainerProps>`
  ${CONTAINER_BASE_CLASS}
  ${({ size = 'large' }) => CONTAINER_SIZES[size]}
`;

export type MntContainerProps = React.ComponentPropsWithRef<typeof MntContainer>;

MntContainer.displayName = 'MntContainer';
