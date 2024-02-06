import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFlipHAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M13.21 5.7a1 1 0 0 0 .24 0l1.94-.49A1 1 0 0 0 16.12 4a1 1 0 0 0-1.21-.73L13 3.73a1 1 0 0 0 .24 2ZM9.51 9h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM7.39 7.15h.24l1.94-.48a1 1 0 0 0-.48-1.97l-1.94.48a1 1 0 0 0 .24 2ZM4 10.51a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1m16.62-8.3a1 1 0 0 0-.86-.21l-1 .24a1 1 0 0 0-.73 1.21 1 1 0 0 0 1 .76A1 1 0 0 0 21 4V3a1 1 0 0 0-.38-.79M20 7a1 1 0 0 0-1 1v1.14a1 1 0 0 0 .51 1.86H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m0 6H4a1 1 0 0 0-1 1v3a1 1 0 0 0 .76 1l16 4a1 1 0 0 0 .24 0 1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 6.72-14-3.5V15h14Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFlipHAlt);
export default ForwardRef;
