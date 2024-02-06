import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowUp = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m17.71 11.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
