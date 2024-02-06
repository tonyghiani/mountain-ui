import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBorderOut = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m8-14H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14ZM8 13a1 1 0 1 0-1-1 1 1 0 0 0 1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBorderOut);
export default ForwardRef;
