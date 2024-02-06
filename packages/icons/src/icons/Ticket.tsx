import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTicket = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m12 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 1 0 2 1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1 1 1 0 0 1 0-2m-1-1.82a3 3 0 0 0 0 5.64V17H10a1 1 0 0 0-2 0H4v-2.18a3 3 0 0 0 0-5.64V7h4a1 1 0 0 0 2 0h10Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTicket);
export default ForwardRef;
