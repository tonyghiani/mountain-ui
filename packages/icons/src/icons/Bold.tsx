import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBold = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16.5 9.5A3.5 3.5 0 0 0 13 6H8.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H13a3.49 3.49 0 0 0 2.44-6 3.5 3.5 0 0 0 1.06-2.5M13 16H9.5v-3H13a1.5 1.5 0 0 1 0 3m0-5H9.5V8H13a1.5 1.5 0 0 1 0 3' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
