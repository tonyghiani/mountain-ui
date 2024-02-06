import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMountainsSun = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2m-1.15 8.47a1 1 0 0 0-1.7 0l-1 1.63-3.29-5.6a1 1 0 0 0-1.72 0l-7 12A1 1 0 0 0 3 22h18a1 1 0 0 0 .85-1.53ZM10.45 20H4.74L10 11l2.94 5-1.25 2Zm2.35 0 1.49-2.37.71-1.06 1-1.68L19.2 20Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMountainsSun);
export default ForwardRef;
