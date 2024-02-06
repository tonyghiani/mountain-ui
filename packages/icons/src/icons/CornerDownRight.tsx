import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCornerDownRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.61 16a1.2 1.2 0 0 0-.22-.33L14.76 11a1 1 0 0 0-1.41 1.41l2.92 2.92h-7a3 3 0 0 1-3-3V3a1 1 0 1 0-2 0v9.37a5 5 0 0 0 5 5h7l-2.92 2.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l4.63-4.63a1 1 0 0 0 .22-.33 1 1 0 0 0 0-.75' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCornerDownRight);
export default ForwardRef;
