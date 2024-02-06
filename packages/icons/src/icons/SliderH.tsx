import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSliderH = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 11h-3.184a2.982 2.982 0 0 0-5.632 0H3a1 1 0 0 0 0 2h9.184a2.982 2.982 0 0 0 5.632 0H21a1 1 0 0 0 0-2m-6 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSliderH);
export default ForwardRef;
