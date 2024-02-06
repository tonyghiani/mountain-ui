import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudShowersAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8 13a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m4-2a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-1-1m6.42-4.78A7 7 0 0 0 5.06 8.11 4 4 0 0 0 2 12a4 4 0 0 0 1.34 3 1 1 0 1 0 1.32-1.5A2 2 0 0 1 4 12a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 11a2.9 2.9 0 0 1-.74 2 1 1 0 0 0 1.48 1.34 5 5 0 0 0-2.32-8.08ZM16 13a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudShowersAlt);
export default ForwardRef;
