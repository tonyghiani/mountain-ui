import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMouseAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m0-4a7 7 0 0 0-7 7v6a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7m5 13a5 5 0 0 1-10 0V9a5 5 0 0 1 10 0Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMouseAlt);
export default ForwardRef;
