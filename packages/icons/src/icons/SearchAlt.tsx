import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSearchAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.07 16.83 19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.29m-8.48-4.24a5 5 0 1 1 0-7.08 5 5 0 0 1 0 7.08m7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42 1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSearchAlt);
export default ForwardRef;
