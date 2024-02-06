import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLaptopConnection = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 18h-6.18A3 3 0 0 0 13 16.18V13h7a1 1 0 0 0 0-2h-1V5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v6H4a1 1 0 0 0 0 2h7v3.18A3 3 0 0 0 9.18 18H3a1 1 0 0 0 0 2h6.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2M7 11V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6Zm5 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLaptopConnection);
export default ForwardRef;
