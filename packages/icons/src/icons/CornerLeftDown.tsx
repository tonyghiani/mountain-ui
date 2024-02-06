import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCornerLeftDown = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 4.31h-9.37a5 5 0 0 0-5 5v7l-2.92-2.96a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.63 4.63a1 1 0 0 0 .33.22.94.94 0 0 0 .76 0 1.2 1.2 0 0 0 .33-.22L13 14.76a1 1 0 0 0-1.41-1.41l-2.96 2.92v-7a3 3 0 0 1 3-3H21a1 1 0 0 0 0-2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCornerLeftDown);
export default ForwardRef;
