import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTopArrowFromTop = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M8.71 7.71 11 5.41V17a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTopArrowFromTop);
export default ForwardRef;
