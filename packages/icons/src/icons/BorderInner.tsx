import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBorderInner = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1M20 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1M4 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m5-7a1 1 0 0 0-1-1h-7V4a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 1-1M8 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBorderInner);
export default ForwardRef;
