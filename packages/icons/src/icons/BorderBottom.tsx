import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBorderBottom = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 13.5a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m12-8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4 8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4-8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-16 6a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-12a1 1 0 1 0-1-1 1 1 0 0 0 1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBorderBottom);
export default ForwardRef;
