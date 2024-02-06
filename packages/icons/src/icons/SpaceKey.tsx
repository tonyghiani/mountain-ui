import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSpaceKey = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 9a1 1 0 0 0-1 1v3H4v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSpaceKey);
export default ForwardRef;
