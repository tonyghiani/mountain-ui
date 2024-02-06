import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHorizontalAlignLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 10h-5V7a1 1 0 0 0-1-1H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-3h17a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4 8h10v2H4Zm16 8H4v-4h16Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHorizontalAlignLeft);
export default ForwardRef;
