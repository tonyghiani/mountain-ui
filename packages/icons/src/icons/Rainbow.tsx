import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRainbow = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7m0-8a1 1 0 0 0 0 2 13 13 0 0 1 13 13 1 1 0 0 0 2 0A15 15 0 0 0 5 4m0 4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0A11 11 0 0 0 5 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRainbow);
export default ForwardRef;
