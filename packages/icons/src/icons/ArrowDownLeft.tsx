import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowDownLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17 16H9.41l8.3-8.29a1 1 0 1 0-1.42-1.42L8 14.59V7a1 1 0 0 0-2 0v10a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 7 18h10a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowDownLeft);
export default ForwardRef;
