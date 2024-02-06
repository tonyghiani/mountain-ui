import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWallet = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2m15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
