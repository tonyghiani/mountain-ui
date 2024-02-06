import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTable = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 20H4v-4h4Zm0-6H4v-4h4Zm0-6H4V4h4Zm6 12h-4v-4h4Zm0-6h-4v-4h4Zm0-6h-4V4h4Zm6 12h-4v-4h4Zm0-6h-4v-4h4Zm0-6h-4V4h4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;
