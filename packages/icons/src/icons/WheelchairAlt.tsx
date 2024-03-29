import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWheelchairAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 16.18V16a3 3 0 0 0-2-2.82V7h1a1 1 0 0 0 0-2H7a3 3 0 0 0-3-3H3a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v7.42A5 5 0 1 0 12 17a4.9 4.9 0 0 0-.42-2H17a1 1 0 0 1 1 1v.18a3 3 0 1 0 2 0M7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3m9-7h-6a4.93 4.93 0 0 0-3-1v-1h9Zm0-4H7V7h9Zm3 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1M7 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWheelchairAlt);
export default ForwardRef;
