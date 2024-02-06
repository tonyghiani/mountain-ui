import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowsMaximize = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 14a1 1 0 0 0-1 1v3.59L5.41 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v6a1 1 0 0 0 2 0V5.41L18.59 20H15a1 1 0 0 0 0 2h6a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-6a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowsMaximize);
export default ForwardRef;
