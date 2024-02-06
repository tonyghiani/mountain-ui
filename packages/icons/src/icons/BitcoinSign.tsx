import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBitcoinSign = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 9a4 4 0 0 0-4-4V3a1 1 0 0 0-2 0v2h-2V3a1 1 0 0 0-2 0v2H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h3v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2a4 4 0 0 0 2.62-7A4 4 0 0 0 19 9m-4 8H9v-4h6a2 2 0 0 1 0 4m0-6H9V7h6a2 2 0 0 1 0 4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBitcoinSign);
export default ForwardRef;
