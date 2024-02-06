import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgImageBroken = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.71 14.54 19.21 12a1 1 0 0 0-1.42 0L15 14.84 12.21 12a1 1 0 0 0-1.42 0L8.5 14.34 6.21 12a1 1 0 0 0-1.42 0l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0-.08.38V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3.75a1 1 0 0 0-.08-.38 1 1 0 0 0-.21-.33M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3.34l1.5-1.5 2.29 2.3a1 1 0 0 0 1.42 0l2.29-2.3L14.29 17a1 1 0 0 0 1.42 0l2.79-2.8 1.5 1.5ZM19 2H5a3 3 0 0 0-3 3v5.26a1.2 1.2 0 0 0 0 .27v.1a1 1 0 0 0 1.66.31L5.5 9.16l2.29 2.3a1 1 0 0 0 1.42 0l2.29-2.3L14.29 12a1 1 0 0 0 1.42 0l2.79-2.8 1.77 1.78a1 1 0 0 0 1.66-.31.3.3 0 0 0 0-.09.9.9 0 0 0 .06-.28V5A3 3 0 0 0 19 2m1 5.84L19.21 7a1 1 0 0 0-1.42 0L15 9.84 12.21 7a1 1 0 0 0-1.42 0L8.5 9.34 6.21 7a1 1 0 0 0-1.42 0L4 7.84V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgImageBroken);
export default ForwardRef;
