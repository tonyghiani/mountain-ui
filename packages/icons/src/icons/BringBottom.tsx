import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBringBottom = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 14h-2a1 1 0 1 0 0 2h1v4H4v-4h7a1 1 0 0 0 0-2h-1V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4 10h4v4H4Zm8.71-3.3L14 5.41V17a1 1 0 1 0 2 0V5.41l1.29 1.29A1 1 0 0 0 18 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42-.01' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBringBottom);
export default ForwardRef;
