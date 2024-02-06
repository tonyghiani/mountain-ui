import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBabyCarriage = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1M9 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1M22 8.5A6.51 6.51 0 0 0 15.5 2H15a1 1 0 0 0-1 1v5H7.52L6.27 4.65A1 1 0 0 0 5.33 4H3a1 1 0 0 0 0 2h1.64l1.25 3.37.51 1.37v.09A6.44 6.44 0 0 0 12.5 15h3A6.49 6.49 0 0 0 22 8.5m-3.32 3.18A4.47 4.47 0 0 1 15.5 13h-3a4.47 4.47 0 0 1-4.16-2.8.14.14 0 0 1 0-.06L8.26 10h11.48a4.3 4.3 0 0 1-1.06 1.68M16 8V4a4.49 4.49 0 0 1 4 4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBabyCarriage);
export default ForwardRef;
