import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMars = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.42 4.12a1 1 0 0 0-.54-.54 1 1 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-2.4 2.4a7 7 0 1 0 1.41 1.41l2.4-2.4V8.5a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38M14 17a5 5 0 1 1 0-7 5 5 0 0 1 0 7' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMars);
export default ForwardRef;
