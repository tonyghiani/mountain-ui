import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCardAtm = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 4.5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m1 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-4-6a3 3 0 0 0-1.51.42 3 3 0 1 0 0 5.16A3 3 0 1 0 16 10.5m-2.83 4a1 1 0 0 1-.17 0 1 1 0 0 1 0-2 1 1 0 0 1 .17 0 2.8 2.8 0 0 0 0 1.92Zm2.83 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCardAtm);
export default ForwardRef;
