import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHorizontalAlignRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2a1 1 0 0 0-1 1v3H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h17v3a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m-1 14H4v-4h16Zm0-6H10V8h10Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHorizontalAlignRight);
export default ForwardRef;
