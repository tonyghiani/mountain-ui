import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgKid = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 10a1 1 0 1 0-1 1 1 1 0 0 0 1-1m4.5 4.06a1 1 0 0 0-1.37.36 1.3 1.3 0 0 1-2.26 0 1 1 0 0 0-1.37-.36 1 1 0 0 0-.37 1.36 3.31 3.31 0 0 0 5.74 0 1 1 0 0 0-.37-1.36M15 9a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18A8 8 0 0 1 9 4.57 3 3 0 0 0 9 5a3 3 0 0 0 3 3 1 1 0 0 0 0-2 1 1 0 0 1 0-2 8 8 0 0 1 0 16' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgKid);
export default ForwardRef;
