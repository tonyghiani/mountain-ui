import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMinusPath = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.18 4h2.1a1 1 0 0 0 0-2h-2.1a1 1 0 0 0 0 2M3 11.28a1 1 0 0 0 1-1v-2.1a1 1 0 0 0-2 0v2.1a1 1 0 0 0 1 1M14.46 4a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2M21 7.54h-4.54a1 1 0 1 0-2 0H8.54a1 1 0 0 0-1 1v5.92a1 1 0 1 0 0 2V21a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V8.54a1 1 0 0 0-1-1M20 20H9.54V9.54H20ZM4 2H3a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0 1 1 0 0 0 0-2m0 12.46a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMinusPath);
export default ForwardRef;
