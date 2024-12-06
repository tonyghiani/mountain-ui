import React from 'react';
import mnt from 'react-mnt';

const CardWrapper = mnt('div')`
  w-fit flex flex-col rounded-xl border border-solid border-sky-600 overflow-hidden
`;

export interface CardProps extends React.ComponentProps<typeof CardWrapper> {
  heading?: React.ReactNode;
}

export const Card = ({ children, heading = null, ...props }: CardProps) => {
  return (
    <CardWrapper {...props}>
      {heading && <div className='flex items-center justify-center bg-sky-600 p-2'>{heading}</div>}
      {children}
    </CardWrapper>
  );
};
