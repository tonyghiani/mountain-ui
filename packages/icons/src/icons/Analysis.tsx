import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAnalysis = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.71 7.29a1 1 0 0 0-1.42 0L14 13.59l-4.29-4.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 11.41l4.29 4.3a1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAnalysis);
export default ForwardRef;
