import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPercentage = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7.758 10.758a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3m0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1m8.484 6.484a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m3.465-12.949a1 1 0 0 0-1.414 0l-14 14a1 1 0 1 0 1.414 1.414l14-14a1 1 0 0 0 0-1.414' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPercentage);
export default ForwardRef;
