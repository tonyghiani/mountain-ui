import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDrill = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 4H9a1 1 0 0 0-1 1v2H3a1 1 0 0 0 0 2h5v4a1 1 0 0 0 2 0v-1h4v7a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3v-5.18A3 3 0 0 0 22 9V7a3 3 0 0 0-3-3m-1 13a1 1 0 0 1-1 1h-1v-6h2Zm2-8a1 1 0 0 1-1 1h-9V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDrill);
export default ForwardRef;
