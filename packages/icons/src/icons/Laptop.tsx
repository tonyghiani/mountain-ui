import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLaptop = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1M6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;
