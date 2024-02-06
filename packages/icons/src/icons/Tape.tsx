import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTape = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.5 7a4 4 0 1 0 4 4 4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2m1-10h-2a7 7 0 0 0-7 7v3h-1a1 1 0 0 0 0 2h1v2h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h12a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7m5 9a5 5 0 0 1-5 5h-7v-7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTape);
export default ForwardRef;
