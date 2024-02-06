import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgClockTwo = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8m2.098-10.366L13 10.268V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1.5.866l2.598-1.5a1 1 0 1 0-1-1.732' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgClockTwo);
export default ForwardRef;
