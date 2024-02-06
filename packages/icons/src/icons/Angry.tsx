import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAngry = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 11a1 1 0 0 0 .89-.55 1 1 0 0 0-.44-1.34l-2-1a1 1 0 1 0-.9 1.78l2 1A.93.93 0 0 0 10 11m2-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m-3.64-4.67a1 1 0 0 0-.13 1.4 1 1 0 0 0 1.41.13 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 .64.23 1 1 0 0 0 .64-1.76 5.81 5.81 0 0 0-7.28 0m7.19-7.22-2 1a1 1 0 0 0-.44 1.34A1 1 0 0 0 14 11a.93.93 0 0 0 .45-.11l2-1a1 1 0 0 0-.9-1.78' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAngry);
export default ForwardRef;
