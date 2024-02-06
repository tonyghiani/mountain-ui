import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgThunderstorm = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M13.5 15h-2.27l1.45-2.5a1 1 0 1 0-1.74-1l-2.31 4a1 1 0 0 0 0 1 1 1 0 0 0 .87.5h2.27l-1.45 2.5a1 1 0 0 0 1.74 1l2.31-4a1 1 0 0 0 0-1 1 1 0 0 0-.87-.5m4.92-7.79a7 7 0 0 0-13.36 1.9A4 4 0 0 0 6 17a1 1 0 0 0 0-2 2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66A3 3 0 0 1 17 15a1 1 0 0 0 0 2 5 5 0 0 0 1.42-9.79' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgThunderstorm);
export default ForwardRef;
