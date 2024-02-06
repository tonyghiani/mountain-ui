import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDataSharing = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.52 3.87a5 5 0 0 0-9.08.13H7a3 3 0 0 0-3 3v4a1 1 0 0 0 2 0V7a1 1 0 0 1 1-1h2.78A3 3 0 0 0 9 8a3 3 0 0 0 3 3h7.33a3.66 3.66 0 0 0 1.19-7.13M19.33 9H12a1 1 0 0 1 0-2 1 1 0 0 0 1-1 3 3 0 0 1 5.84-1 1 1 0 0 0 .78.67A1.65 1.65 0 0 1 21 7.33 1.67 1.67 0 0 1 19.33 9M19 13a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-2.26a3.66 3.66 0 0 0-2.22-2.13 5 5 0 0 0-9.45 1.28A3 3 0 0 0 4 23h7.33a3.66 3.66 0 0 0 3.6-3H17a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1m-7.67 8H4a1 1 0 0 1 0-2 1 1 0 0 0 1-1 3 3 0 0 1 5.84-1 1 1 0 0 0 .78.67A1.65 1.65 0 0 1 13 19.33 1.67 1.67 0 0 1 11.33 21' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDataSharing);
export default ForwardRef;
