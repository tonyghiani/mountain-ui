import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSkipForwardCircle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15.5 7a1 1 0 0 0-1 1v1.69l-4-2.31a2 2 0 0 0-3 1.73v5.78a2 2 0 0 0 1 1.73 2 2 0 0 0 2 0l4-2.31V16a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m-1 5-5 2.89V9.11l5 2.88ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSkipForwardCircle);
export default ForwardRef;
