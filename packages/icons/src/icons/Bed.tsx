import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBed = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M7 12.5a3 3 0 1 0-3-3 3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1m13-2h-8a1 1 0 0 0-1 1v6H3v-8a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-3h18v3a1 1 0 0 0 2 0v-9a3 3 0 0 0-3-3m1 7h-8v-5h7a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBed);
export default ForwardRef;
