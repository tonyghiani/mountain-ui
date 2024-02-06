import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDribbble = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 2a7.94 7.94 0 0 1 5.51 2.22 25 25 0 0 1-4.83 2.18 29 29 0 0 0-2.87-4.09A8 8 0 0 1 12 4M7.89 5.15A27 27 0 0 1 10.7 9a25 25 0 0 1-6 .74h-.36a8 8 0 0 1 3.55-4.59M6 17.31A7.9 7.9 0 0 1 4 12v-.29h.68a26.7 26.7 0 0 0 7-1c.32.61.62 1.24.91 1.89a14.3 14.3 0 0 0-4.29 2.41l-.3.24a21 21 0 0 0-2 2.06M12 20a7.9 7.9 0 0 1-4.47-1.37 18 18 0 0 1 1.56-1.58l.32-.27a12.6 12.6 0 0 1 4-2.27 32 32 0 0 1 1.4 5A8.1 8.1 0 0 1 12 20m4.63-1.49a35 35 0 0 0-1.28-4.46h.34a.25.25 0 0 1 .12 0h.69a9.4 9.4 0 0 1 3.09.53 7.94 7.94 0 0 1-2.96 3.93M16.5 12h-.62a1.6 1.6 0 0 0-.39 0 7 7 0 0 0-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.6 26.6 0 0 0 5.13-2.4A8 8 0 0 1 20 12v.51a11.5 11.5 0 0 0-3.5-.51' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDribbble);
export default ForwardRef;
