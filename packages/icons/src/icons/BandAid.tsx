import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBandAid = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.82 11.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0m2.47 2.48a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0m9-10A6 6 0 0 0 12 3.55a6 6 0 0 0-8.24.2A6 6 0 0 0 3.57 12 6 6 0 0 0 8 22a5.92 5.92 0 0 0 4-1.55 6 6 0 0 0 8.25-.2 6 6 0 0 0 .18-8.25 6 6 0 0 0-.18-8.25Zm-1.46 1.4a4 4 0 0 1 .17 5.39L13.44 5a4.07 4.07 0 0 1 5.39.17M5.17 18.83A4 4 0 0 1 5 13.44l5.6 5.6a4.08 4.08 0 0 1-5.43-.21m13.66 0a4.08 4.08 0 0 1-5.64 0l-8-8a4 4 0 0 1 0-5.64 4 4 0 0 1 5.64 0l8 8a4 4 0 0 1 0 5.64m-5.06-7.54a1 1 0 0 0 0 1.42 1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0m-2.48-2.47a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBandAid);
export default ForwardRef;
