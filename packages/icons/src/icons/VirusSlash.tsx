import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVirusSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10.17 5.236a8 8 0 0 1 .83-.158v1.27a1 1 0 1 0 2 0V5.071a6.95 6.95 0 0 1 3.95 1.98v.001l.001.001a7 7 0 0 1 1.97 3.949H18a1 1 0 0 0 0 2h.922a8 8 0 0 1-.16.827 1 1 0 0 0 .718 1.217 1 1 0 0 0 .25.032 1 1 0 0 0 .968-.75 10 10 0 0 0 .236-1.326H22a1 1 0 0 0 0-2h-1.06a8.93 8.93 0 0 0-1.912-4.614l.75-.75a1 1 0 0 0-1.414-1.414l-.753.753A8.9 8.9 0 0 0 13 3.067V1.999a1 1 0 1 0-2 0v1.066a9.5 9.5 0 0 0-1.33.236 1 1 0 0 0 .5 1.936M14 9.002a1 1 0 1 0 1-1 1 1 0 0 0-1 1m4.377 7.963-.007-.011-.012-.008L2.707 1.295a1 1 0 0 0-1.414 1.414l3.679 3.679a8.93 8.93 0 0 0-1.913 4.614H2a1 1 0 0 0 0 2h1.06a8.95 8.95 0 0 0 1.911 4.615l-.75.75a1 1 0 1 0 1.415 1.413l.75-.75A8.95 8.95 0 0 0 11 20.94v1.063a1 1 0 0 0 2 0v-1.063a8.95 8.95 0 0 0 4.614-1.909l3.679 3.679a1 1 0 0 0 1.414-1.414ZM13 18.92v-1.917a1 1 0 0 0-2 0v1.917a7 7 0 0 1-3.945-1.96l-.005-.007-.007-.005a7 7 0 0 1-1.963-3.945H6a1 1 0 0 0 0-2h-.921a6.94 6.94 0 0 1 1.32-3.187L8.253 9.67a1.5 1.5 0 0 0 2.08 2.08l5.853 5.853A6.96 6.96 0 0 1 13 18.919m-4-4.917a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVirusSlash);
export default ForwardRef;
