import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDiamond = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m20 10.35-5.78-7.41A3.06 3.06 0 0 0 9.75 3L4 10.35A3.05 3.05 0 0 0 3.51 12 3.1 3.1 0 0 0 4 13.58l.06.07 5.74 7.41A3 3 0 0 0 12 22a3.06 3.06 0 0 0 2.26-1L20 13.65a3 3 0 0 0-.06-3.3Zm-1.57 2.14-5.67 7.22a1.11 1.11 0 0 1-1.42.07l-5.69-7.31a1 1 0 0 1-.14-.47 1.1 1.1 0 0 1 .1-.45l5.67-7.22a1.11 1.11 0 0 1 1.42-.07l5.63 7.28a1 1 0 0 1 .16.54 1.1 1.1 0 0 1-.1.41Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDiamond);
export default ForwardRef;
