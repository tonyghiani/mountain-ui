import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSlackAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M23 9.5A3.504 3.504 0 0 0 19.5 6a3.46 3.46 0 0 0-1.5.351V4.5a3.495 3.495 0 0 0-6-2.442A3.487 3.487 0 0 0 6.351 6H4.5a3.495 3.495 0 0 0-2.442 6A3.487 3.487 0 0 0 6 17.649V19.5a3.495 3.495 0 0 0 6 2.442A3.487 3.487 0 0 0 17.649 18H19.5a3.495 3.495 0 0 0 2.442-6A3.49 3.49 0 0 0 23 9.5m-10-5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0Zm-7 10A1.5 1.5 0 1 1 4.5 13H6Zm5 5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 3 0ZM9.5 11h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3M11 6H9.5A1.5 1.5 0 1 1 11 4.5Zm1 6.058L11.942 12l.058-.058.058.058zM14.5 21a1.5 1.5 0 0 1-1.5-1.5V18h1.5a1.5 1.5 0 0 1 0 3m5-5h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3m0-5H18V9.5a1.5 1.5 0 1 1 1.5 1.5' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSlackAlt);
export default ForwardRef;
