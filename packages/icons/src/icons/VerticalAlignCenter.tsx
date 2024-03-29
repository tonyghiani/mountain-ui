import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVerticalAlignCenter = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 11h-3V6a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v8H3a1 1 0 0 0 0 2h3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2h3a1 1 0 0 0 1-1v-5h3a1 1 0 0 0 0-2m-9 9H8V4h4Zm4-3h-2V7h2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVerticalAlignCenter);
export default ForwardRef;
