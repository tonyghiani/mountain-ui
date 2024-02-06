import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGlass = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.75 2.33A1 1 0 0 0 19 2H5a1 1 0 0 0-.75.33 1 1 0 0 0-.25.78l1.8 16.22a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67L20 3.11a1 1 0 0 0-.25-.78M16.2 19.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44ZM17.44 8H6.56l-.44-4h11.76Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGlass);
export default ForwardRef;
