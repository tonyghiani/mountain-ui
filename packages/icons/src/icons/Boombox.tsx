import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBoombox = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm-3.62-8.2A3 3 0 0 0 15 9a3 3 0 0 0-6 0 3 3 0 0 0 .62 1.8 4 4 0 1 0 4.76 0M12 8a1 1 0 1 1-1 1 1 1 0 0 1 1-1m0 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBoombox);
export default ForwardRef;
