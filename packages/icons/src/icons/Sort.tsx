import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSort = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.29 14.29 12 18.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0-1.42-1.42M7.71 9.71 12 5.41l4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-5-5a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
