import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgChartDown = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 11a1 1 0 0 0-1 1v2.59l-6.29-6.3a1 1 0 0 0-1.42 0L9 11.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l6 6a1 1 0 0 0 1.42 0l3.29-3.3L18.59 16H16a1 1 0 0 0 0 2h5a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 22 17v-5a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgChartDown);
export default ForwardRef;
