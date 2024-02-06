import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgEmoji = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-6 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m3-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m4.28-7.12a1 1 0 0 0-1.4-.16A2.8 2.8 0 0 0 14 14h-3.65a2.8 2.8 0 0 0-.88-1.31 1 1 0 0 0-1.36.2 1 1 0 0 0 .14 1.39 1 1 0 0 1 .25.72 1.1 1.1 0 0 1-.25.72 1 1 0 1 0 1.25 1.56 2.9 2.9 0 0 0 .84-1.28H14a2.7 2.7 0 0 0 .89 1.31 1 1 0 0 0 .57.18 1 1 0 0 0 .78-.38 1 1 0 0 0-.14-1.39 1 1 0 0 1-.25-.72 1.1 1.1 0 0 1 .25-.72 1 1 0 0 0 .18-1.4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgEmoji);
export default ForwardRef;
