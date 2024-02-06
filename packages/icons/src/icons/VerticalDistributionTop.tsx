import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVerticalDistributionTop = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M3 6h1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m3 0h12v4H6Zm15 8H3a1 1 0 0 0 0 2h2v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2a1 1 0 0 0 0-2m-4 4H7v-2h10Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVerticalDistributionTop);
export default ForwardRef;
