import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBorderHorizontal = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m8 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1m12 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m8 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m-4 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1M4 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1M8 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBorderHorizontal);
export default ForwardRef;
