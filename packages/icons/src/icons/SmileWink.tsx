import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSmileWink = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0 1 1 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1 1 0 1 0-1.28-1.54M10.5 10A1.5 1.5 0 1 0 9 11.5a1.5 1.5 0 0 0 1.5-1.5M15 9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSmileWink);
export default ForwardRef;
