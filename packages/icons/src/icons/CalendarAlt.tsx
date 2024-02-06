import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCalendarAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 19a1 1 0 1 0-1-1 1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCalendarAlt);
export default ForwardRef;
