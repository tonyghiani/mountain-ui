import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAccessibleIconAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2m-3.3 11.4A4 4 0 1 1 9.05 12a1 1 0 1 0-.22-2 6 6 0 0 0 .67 12 6 6 0 0 0 4.8-2.4 1 1 0 0 0-1.6-1.2m6.8 1.6h-1v-5a1 1 0 0 0-1-1h-4.57l1.69-4.66v-.31a1 1 0 0 0 0-.18 1 1 0 0 0 0-.19 1.4 1.4 0 0 0-.09-.17.7.7 0 0 0-.11-.15.6.6 0 0 0-.15-.13s0-.06-.08-.08L9.71 5.55h-.12a1 1 0 0 0-.19-.06H9a.8.8 0 0 0-.2.07h-.11L6 7.13A1 1 0 0 0 6.48 9 1 1 0 0 0 7 8.87l2.23-1.3 3.24 1.88-1.89 5.21a1 1 0 0 0 0 .16.6.6 0 0 0 0 .18 3 3 0 0 0 .08.38l.11.15a.6.6 0 0 0 .11.16.7.7 0 0 0 .14.09 1.2 1.2 0 0 0 .19.12 1 1 0 0 0 .34.06h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAccessibleIconAlt);
export default ForwardRef;
