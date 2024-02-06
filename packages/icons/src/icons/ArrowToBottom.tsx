import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowToBottom = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2m-7.71-2.29a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42L13 14.59V3a1 1 0 0 0-2 0v11.59l-2.29-2.3a1 1 0 1 0-1.42 1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowToBottom);
export default ForwardRef;
