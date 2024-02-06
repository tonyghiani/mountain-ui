import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgToggleOn = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 8.5m0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5M16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14m0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgToggleOn);
export default ForwardRef;
