import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgEnvelopeTimes = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.41l5.88 5.89a3 3 0 0 0 2.11.87 3.08 3.08 0 0 0 2.16-.9l1.72-1.72a1 1 0 1 0-1.42-1.42l-1.75 1.75a1 1 0 0 1-1.4 0L5.41 7H13a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-.59-5 1.3-1.29a1 1 0 1 0-1.42-1.42L19 4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42L17.59 6l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 7.41l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgEnvelopeTimes);
export default ForwardRef;
