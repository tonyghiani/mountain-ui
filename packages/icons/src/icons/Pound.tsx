import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPound = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 20H8a4.92 4.92 0 0 0 1-3v-3h6a1 1 0 0 0 0-2H9V8.89a4.89 4.89 0 0 1 9.13-2.44 1 1 0 0 0 1.37.36 1 1 0 0 0 .37-1.36A6.9 6.9 0 0 0 7 8.89V12H4a1 1 0 0 0 0 2h3v3a3 3 0 0 1-3 3 1 1 0 0 0 0 2h16a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPound);
export default ForwardRef;
