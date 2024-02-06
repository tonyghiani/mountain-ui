import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGrin = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1m3-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m3-7H9a1 1 0 0 0-1 1 4 4 0 0 0 8 0 1 1 0 0 0-1-1m-3 3a2 2 0 0 1-1.73-1h3.46A2 2 0 0 1 12 16m3-7a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGrin);
export default ForwardRef;
