import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgToggleOff = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 8 8.5m0 5A1.5 1.5 0 1 1 9.5 12 1.5 1.5 0 0 1 8 13.5M16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14m0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgToggleOff);
export default ForwardRef;
