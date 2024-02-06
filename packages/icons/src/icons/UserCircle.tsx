import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgUserCircle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 0 0-7.35 16.76 10 10 0 0 0 14.7 0A10 10 0 0 0 12 2m0 18a8 8 0 0 1-5.55-2.25 6 6 0 0 1 11.1 0A8 8 0 0 1 12 20m-2-10a2 2 0 1 1 2 2 2 2 0 0 1-2-2m8.91 6A8 8 0 0 0 15 12.62a4 4 0 1 0-6 0A8 8 0 0 0 5.09 16 7.9 7.9 0 0 1 4 12a8 8 0 0 1 16 0 7.9 7.9 0 0 1-1.09 4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgUserCircle);
export default ForwardRef;
