import React, { useRef } from 'react';
import mnt from 'react-mnt';
import { useEventListener, useKeyDown } from '@mountain-ui/react-hooks';
import { MntIconButton } from 'src/components/atoms';

interface ModalProps {
  /**
   * Control the state of the modal, whether is should be open or not.
   */
  isOpen?: boolean;
  /**
   * The button status
   */
  onClose?: (
    _event?: React.MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent | KeyboardEvent
  ) => void;
}

const StyledDialog = mnt('dialog')<ModalProps>`
  mnt-modal
`;

/**
 * Modal component to display a popup content on page using a native html5 dialog element.
 */
export const MntModal = ({ isOpen, onClose, children, ...props }: MntModalProps) => {
  const modalRef = useRef(null);

  useKeyDown('Escape', event => {
    event.stopPropagation();
    if (onClose) onClose(event);
  });

  useEventListener(
    'click',
    event => event.target === modalRef.current && onClose?.(event),
    modalRef
  );

  // Open or close the dialog based on the `isOpen` prop
  if (isOpen && modalRef.current) {
    modalRef.current.showModal();
  } else if (!isOpen && modalRef.current) {
    modalRef.current.close();
  }

  return (
    <StyledDialog ref={modalRef} role='dialog' aria-modal='true' aria-label='mnt-modal' {...props}>
      <MntIconButton
        variant='text'
        size='l'
        icon={<CloseIcon />}
        onClick={onClose}
        aria-label='Close modal'
        className='float-end m-2'
      />
      {/* Content container to avoid matching modal on close */}
      <div className='p-4'>{children}</div>
    </StyledDialog>
  );
};

export type MntModalProps = React.ComponentPropsWithRef<typeof StyledDialog>;

const CloseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
  >
    <path d='m13.41 12 6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
  </svg>
);
