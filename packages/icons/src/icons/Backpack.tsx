import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBackpack = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M13 10h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m5 0a4 4 0 0 0-3-3.86V5a3 3 0 0 0-6 0v1.14A4 4 0 0 0 6 10a4 4 0 0 0-4 4v3a3 3 0 0 0 3 3h1.18A3 3 0 0 0 9 22h6a3 3 0 0 0 2.82-2H19a3 3 0 0 0 3-3v-3a4 4 0 0 0-4-4M6 18H5a1 1 0 0 1-1-1v-3a2 2 0 0 1 2-2Zm5-13a1 1 0 0 1 2 0v1h-2Zm5 14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Zm0-4.44a3.9 3.9 0 0 0-2-.56h-4a3.9 3.9 0 0 0-2 .56V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2ZM20 17a1 1 0 0 1-1 1h-1v-6a2 2 0 0 1 2 2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBackpack);
export default ForwardRef;
