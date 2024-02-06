import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgUserArrows = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.64 15.772a3.47 3.47 0 0 0 .86-2.272 3.5 3.5 0 0 0-7 0 3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 13 20a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.99 4.99 0 0 0-2.36-4.228M18 15a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 18 15M6.793 7.707l2 2a1 1 0 0 0 1.414-1.414L9.914 8h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414m1.847 8.065A3.47 3.47 0 0 0 9.5 13.5a3.5 3.5 0 0 0-7 0 3.47 3.47 0 0 0 .86 2.272A4.99 4.99 0 0 0 1 20a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.99 4.99 0 0 0-2.36-4.228M6 15a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6 15' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgUserArrows);
export default ForwardRef;
