import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVenus = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 9a7 7 0 1 0-8 6.92V18h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-2.08A7 7 0 0 0 19 9m-7 5a5 5 0 1 1 5-5 5 5 0 0 1-5 5' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVenus);
export default ForwardRef;
