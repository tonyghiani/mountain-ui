import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBellSchool = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 8a2 2 0 1 0-2.27 2 4.49 4.49 0 0 1-3 5.85 3 3 0 0 0-1.3-1.43 7 7 0 1 0-10.9 0A3 3 0 0 0 2 17v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-.19a6.47 6.47 0 0 0 4.58-8.59A2 2 0 0 0 21 8m-7 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h.41a6.94 6.94 0 0 0 7.18 0H13a1 1 0 0 1 1 1Zm-5-3a5 5 0 1 1 5-5 5 5 0 0 1-5 5m0-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBellSchool);
export default ForwardRef;
