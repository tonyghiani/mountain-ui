import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSelfie = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1h10Zm-5-5a3 3 0 0 1 2.82 2H9.18A3 3 0 0 1 12 14m-1-3a1 1 0 1 1 1 1 1 1 0 0 1-1-1m6 5h-.1a5 5 0 0 0-2.42-3.32A3 3 0 0 0 15 11a3 3 0 0 0-6 0 3 3 0 0 0 .52 1.68A5 5 0 0 0 7.1 16H7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1ZM12 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSelfie);
export default ForwardRef;
