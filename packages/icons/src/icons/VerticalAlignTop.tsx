import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVerticalAlignTop = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2H3a1 1 0 0 0 0 2h3v17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h3a1 1 0 0 0 1-1V4h3a1 1 0 0 0 0-2m-9 18H8V4h4Zm4-6h-2V4h2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVerticalAlignTop);
export default ForwardRef;
