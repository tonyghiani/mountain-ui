import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCornerRightDown = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.71 13.35a1 1 0 0 0-1.42 0l-2.92 2.92v-8a4 4 0 0 0-4-4H3a1 1 0 1 0 0 2h10.37a2 2 0 0 1 2 2v8l-2.92-2.92A1 1 0 0 0 11 14.76l4.62 4.63a1.2 1.2 0 0 0 .33.22.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.22l4.63-4.63a1 1 0 0 0 .04-1.41' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCornerRightDown);
export default ForwardRef;
