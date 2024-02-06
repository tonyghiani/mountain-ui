import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPoundCircle = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 15h-5.18a3 3 0 0 0 .18-1v-1h2.5a1 1 0 0 0 0-2H11v-1a1.95 1.95 0 0 1 3.63-1 1 1 0 0 0 1.74-1A4 4 0 0 0 9 10v1H8a1 1 0 0 0 0 2h1v1a1 1 0 0 1-1 1 1 1 0 0 0 0 2h8a1 1 0 0 0 0-2M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPoundCircle);
export default ForwardRef;
