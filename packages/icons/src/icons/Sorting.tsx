import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSorting = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.29 10.21a1 1 0 0 0 1.42 0l3-3a1 1 0 1 0-1.42-1.42L12 8.09l-2.29-2.3a1 1 0 0 0-1.42 1.42Zm1.42 4.58a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSorting);
export default ForwardRef;
