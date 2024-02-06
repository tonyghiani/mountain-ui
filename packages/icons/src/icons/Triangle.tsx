import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTriangle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.87 19.29-9-15.58a1 1 0 0 0-1.74 0l-9 15.58a1 1 0 0 0 0 1 1 1 0 0 0 .87.5h18a1 1 0 0 0 .87-.5 1 1 0 0 0 0-1m-17.14-.5L12 6.21l7.27 12.58Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTriangle);
export default ForwardRef;
