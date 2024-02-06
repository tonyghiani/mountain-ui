import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCrosshairs = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 11h-1.07A8 8 0 0 0 13 4.07V3a1 1 0 0 0-2 0v1.07A8 8 0 0 0 4.07 11H3a1 1 0 0 0 0 2h1.07A8 8 0 0 0 11 19.93V21a1 1 0 0 0 2 0v-1.07A8 8 0 0 0 19.93 13H21a1 1 0 0 0 0-2m-9 7a6 6 0 1 1 6-6 6 6 0 0 1-6 6m0-9a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCrosshairs);
export default ForwardRef;
