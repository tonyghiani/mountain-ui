import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHorizontalDistributionRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 2a1 1 0 0 0-1 1v1h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m-1 16h-4V6h4ZM9 2a1 1 0 0 0-1 1v2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M8 17H6V7h2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHorizontalDistributionRight);
export default ForwardRef;
