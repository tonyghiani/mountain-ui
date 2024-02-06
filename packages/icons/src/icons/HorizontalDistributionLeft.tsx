import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHorizontalDistributionLeft = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11 4H6V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H6V6h4Zm9-13h-3V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 12h-2V7h2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHorizontalDistributionLeft);
export default ForwardRef;
