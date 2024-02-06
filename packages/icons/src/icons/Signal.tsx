import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSignal = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M6 15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m4-3a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m8-8a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m-4 4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSignal);
export default ForwardRef;
