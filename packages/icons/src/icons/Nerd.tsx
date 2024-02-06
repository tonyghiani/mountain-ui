import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgNerd = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.41 8.65v-.06a10 10 0 0 0-18.78-.06.9.9 0 0 0-.08.24A9.9 9.9 0 0 0 2 12a10 10 0 1 0 19.41-3.35M12 4a8 8 0 0 1 6.92 4h-1.2a3 3 0 0 0-4.62.22A3.2 3.2 0 0 0 12 8a3.2 3.2 0 0 0-1.1.22A3 3 0 0 0 6.28 8h-1.2A8 8 0 0 1 12 4m4.5 6a1 1 0 1 1-1-1 1 1 0 0 1 1 1m-7 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1M12 20a8 8 0 0 1-8-8 8.2 8.2 0 0 1 .26-2H5.5a3 3 0 0 0 6 .18 1 1 0 0 1 1 0 3 3 0 0 0 6-.18h1.24a8.2 8.2 0 0 1 .26 2 8 8 0 0 1-8 8m2.36-5.77a3.76 3.76 0 0 1-4.72 0 1 1 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1 1 0 1 0-1.28-1.54' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgNerd);
export default ForwardRef;
