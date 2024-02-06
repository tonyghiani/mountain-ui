import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHorizontalDistributionCenter = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 5h-1V3a1 1 0 0 0-2 0v2h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v2a1 1 0 0 0 2 0v-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 12h-2V7h2ZM11 4H9V3a1 1 0 0 0-2 0v1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2v1a1 1 0 0 0 2 0v-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H6V6h4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHorizontalDistributionCenter);
export default ForwardRef;
