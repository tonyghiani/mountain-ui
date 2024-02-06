import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRedo = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 11a1 1 0 0 0-1 1 8.05 8.05 0 1 1-2.22-5.5h-2.4a1 1 0 0 0 0 2h4.53a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1.77A10 10 0 1 0 22 12a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
