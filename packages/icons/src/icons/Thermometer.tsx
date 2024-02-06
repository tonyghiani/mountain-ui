import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgThermometer = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m16.29 6.29-7 7a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 1 0-1.42-1.42m4.25-2.83a5 5 0 0 0-7.08 0l-8.17 8.23a1 1 0 0 0-.29.7v5.19l-2.71 2.71a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L6.42 19h5.19a1 1 0 0 0 .7-.29l8.23-8.17a5 5 0 0 0 0-7.08m-1.42 5.66L11.2 17H7v-4.2l7.88-7.92a3 3 0 0 1 4.24 4.24' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgThermometer);
export default ForwardRef;
