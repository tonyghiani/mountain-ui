import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHorizontalAlignCenter = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 10h-2V7a1 1 0 0 0-1-1h-5V3a1 1 0 0 0-2 0v3H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8v3a1 1 0 0 0 2 0v-3h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M7 8h10v2H7Zm13 8H4v-4h16Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHorizontalAlignCenter);
export default ForwardRef;
