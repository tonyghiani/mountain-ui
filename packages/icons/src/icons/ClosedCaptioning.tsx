import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgClosedCaptioning = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.24 13.14a1 1 0 0 0-1.37.36 1 1 0 0 1-1.58.19A.93.93 0 0 1 8 13v-2a1 1 0 0 1 1.88-.48 1 1 0 0 0 1.37.34 1 1 0 0 0 .34-1.38 3 3 0 0 0-.46-.59A3 3 0 0 0 9 8a3 3 0 0 0-3 3v2a3 3 0 0 0 5.59 1.5 1 1 0 0 0-.35-1.36m6 0a1 1 0 0 0-1.37.36 1 1 0 0 1-1.58.19A.93.93 0 0 1 14 13v-2a1 1 0 0 1 1.88-.48 1 1 0 0 0 1.37.34 1 1 0 0 0 .34-1.38 3 3 0 0 0-.46-.59A3 3 0 0 0 15 8a3 3 0 0 0-3 3v2a3 3 0 0 0 5.59 1.5 1 1 0 0 0-.35-1.36M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgClosedCaptioning);
export default ForwardRef;
