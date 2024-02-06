import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowDownRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17 6a1 1 0 0 0-1 1v7.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H7a1 1 0 0 0 0 2h10a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 18 17V7a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowDownRight);
export default ForwardRef;
