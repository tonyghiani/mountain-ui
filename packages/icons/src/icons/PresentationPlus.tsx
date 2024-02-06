import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPresentationPlus = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 14h-1V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h1v10H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2m-3 0H6V4h12Zm-8-4h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1V7a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPresentationPlus);
export default ForwardRef;
