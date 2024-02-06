import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVisualStudio = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.85 2 9.09 9.77l-4.9-3.86L2.05 7v10l2.15 1.09 4.93-3.85L16.87 22 22 19.93V4ZM4.37 14.3V9.65l2.44 2.43Zm12.33 1.29L12.05 12l4.65-3.59Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVisualStudio);
export default ForwardRef;
