import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGoogleDriveAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M22 14.44a.6.6 0 0 0 0-.13.6.6 0 0 1 0-.12l-.05-.12-6-10.29a1 1 0 0 0-.95-.49H9a1 1 0 0 0-.5.13l-.11.08a1 1 0 0 0-.09.08.6.6 0 0 0-.1.12s0 0-.06.08l-6 10.33a1 1 0 0 0 0 1l3 5.08a1 1 0 0 0 .11.15v.06a1.1 1.1 0 0 0 .44.26.8.8 0 0 0 .22 0H18a1 1 0 0 0 .86-.49l3-5.14.05-.12a.6.6 0 0 1 0-.12.5.5 0 0 0 0-.13.5.5 0 0 0 0-.13.6.6 0 0 0 .09-.09M6 17.73l-1.79-3.1L9 6.27l.87 1.5 1 1.66L7 15.91Zm6-6.32 1.26 2.16h-2.54Zm5.43 7.3H7.7l1.84-3.14h9.72Zm-1.86-5.14-4.83-8.28h3.69l4.83 8.28Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGoogleDriveAlt);
export default ForwardRef;
