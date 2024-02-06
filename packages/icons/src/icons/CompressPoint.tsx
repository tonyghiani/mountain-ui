import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCompressPoint = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.71 20.29 15.41 14H17a1 1 0 0 0 0-2h-3.59l5.66-5.66a1 1 0 1 0-1.41-1.41L12 10.59V7a1 1 0 0 0-2 0v1.59l-6.29-6.3a1 1 0 0 0-1.42 1.42L8.59 10H7a1 1 0 0 0 0 2h3.59l-5.66 5.66a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0L12 13.41V17a1 1 0 0 0 2 0v-1.59l6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCompressPoint);
export default ForwardRef;
