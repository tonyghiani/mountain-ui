import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowUpLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9.41 8H17a1 1 0 0 0 0-2H7a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 6 7v10a1 1 0 0 0 2 0V9.41l8.29 8.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowUpLeft);
export default ForwardRef;
