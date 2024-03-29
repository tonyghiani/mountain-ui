import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowFromTop = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15.29 16.29 13 18.59V7a1 1 0 0 0-2 0v11.59l-2.29-2.3a1 1 0 1 0-1.42 1.42l4 4a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42M19 2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowFromTop);
export default ForwardRef;
