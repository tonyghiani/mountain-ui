import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgStepBackwardCircle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15.5 7.38a2 2 0 0 0-2 0l-4 2.31V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0v-1.69l4 2.31a2 2 0 0 0 2 0 2 2 0 0 0 1-1.73V9.11a2 2 0 0 0-1-1.73m-1 7.51L9.5 12l5-2.89ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgStepBackwardCircle);
export default ForwardRef;
