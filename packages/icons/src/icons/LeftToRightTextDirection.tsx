import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLeftToRightTextDirection = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.42 17.62a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H3.5a1 1 0 0 0 0 2h14.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76M8.5 10v4a1 1 0 0 0 2 0V4h2v10a1 1 0 0 0 2 0V4h1a1 1 0 0 0 0-2h-7a4 4 0 0 0 0 8m0-6v4a2 2 0 0 1 0-4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLeftToRightTextDirection);
export default ForwardRef;
