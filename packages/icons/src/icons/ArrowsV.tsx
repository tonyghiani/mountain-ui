import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowsV = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15.29 16.29 13 18.59V5.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42L11 5.41v13.18l-2.29-2.3a1 1 0 1 0-1.42 1.42l4 4a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowsV);
export default ForwardRef;
