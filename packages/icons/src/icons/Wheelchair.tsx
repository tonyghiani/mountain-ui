import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWheelchair = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 6.5a2 2 0 1 0-2-2 2 2 0 0 0 2 2m7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 0 0 0-2h-5v-2a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2m-6.8-1.6a4 4 0 0 1-7.2-2.4 4 4 0 0 1 2.4-3.66A1 1 0 1 0 7.1 11a6 6 0 1 0 7.2 9.1 1 1 0 0 0-1.6-1.2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWheelchair);
export default ForwardRef;
