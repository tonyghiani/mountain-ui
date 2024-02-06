import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgMountains = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.85 17.47-5-8a1 1 0 0 0-1.7 0l-1 1.63-3.29-5.6a1 1 0 0 0-1.72 0l-7 12A1 1 0 0 0 3 19h18a1 1 0 0 0 .85-1.53M10.45 17H4.74L10 8l2.93 5Zm2.35 0 2.2-3.43 1-1.68L19.2 17Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgMountains);
export default ForwardRef;
