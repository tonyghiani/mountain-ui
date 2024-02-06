import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDollarAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14 11h-1V7h2a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2V3a1 1 0 0 0-2 0v2h-1a4 4 0 0 0 0 8h1v4H9a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h1a4 4 0 0 0 0-8m-3 0h-1a2 2 0 0 1 0-4h1Zm3 6h-1v-4h1a2 2 0 0 1 0 4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDollarAlt);
export default ForwardRef;
