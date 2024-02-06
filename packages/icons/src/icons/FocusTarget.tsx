import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFocusTarget = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M3 9a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1m5 11H5a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2m9-7a1 1 0 0 0 0-2h-1.14A4 4 0 0 0 13 8.14V7a1 1 0 0 0-2 0v1.14A4 4 0 0 0 8.14 11H7a1 1 0 0 0 0 2h1.14A4 4 0 0 0 11 15.86V17a1 1 0 0 0 2 0v-1.14A4 4 0 0 0 15.86 13Zm-5 1a2 2 0 1 1 2-2 2 2 0 0 1-2 2m9 1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1M19 2h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFocusTarget);
export default ForwardRef;
