import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDiaryAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M17 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M8 20H6V4h2Zm10-1a1 1 0 0 1-1 1h-7V4h7a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDiaryAlt);
export default ForwardRef;
