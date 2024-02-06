import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAnchor = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 13h-2a1 1 0 0 0 0 2h.91A6 6 0 0 1 13 19.91V11h1a1 1 0 0 0 0-2h-1V7.82a3 3 0 1 0-2 0V9h-1a1 1 0 0 0 0 2h1v8.91A6 6 0 0 1 6.09 15H7a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1 8 8 0 0 0 16 0 1 1 0 0 0-1-1m-7-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAnchor);
export default ForwardRef;
