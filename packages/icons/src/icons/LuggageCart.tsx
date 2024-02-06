import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLuggageCart = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M2 13.5v2a1 1 0 0 0 1 1h10a3 3 0 0 0 6 0h2a1 1 0 0 0 1-1v-8a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7H4v-1a1 1 0 0 0-2 0m13 3a1 1 0 1 1 1 1 1 1 0 0 1-1-1m-7-6h12v4h-1.78a3 3 0 0 0-4.44 0H8Zm0-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1H8Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLuggageCart);
export default ForwardRef;
