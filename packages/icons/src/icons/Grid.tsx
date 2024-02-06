import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGrid = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M11 20H4v-4h7Zm0-6H4v-4h7Zm9 6h-7v-4h7Zm0-6h-7v-4h7Zm0-6H4V4h16Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGrid);
export default ForwardRef;
