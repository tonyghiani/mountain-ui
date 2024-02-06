import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPizzaSlice = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.51 12.48a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4.48a1 1 0 1 0 1 1 1 1 0 0 0-1-1M12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m8.5-1.43a3 3 0 0 0-2.3-.29 2.9 2.9 0 0 0-1.09.56L5.51 2.13a1 1 0 0 0-1 0A1 1 0 0 0 4 3v13.17A2.94 2.94 0 0 0 2 19a3 3 0 0 0 2.92 3h.58a18.57 18.57 0 0 0 16.11-9.41 3 3 0 0 0-1.1-4.02ZM6 4.73l9.89 5.71A12.57 12.57 0 0 1 6 16Zm13.87 6.88A16.58 16.58 0 0 1 5 20a1 1 0 0 1-1-1 1 1 0 0 1 .3-.72A1 1 0 0 1 5 18h.51a14.5 14.5 0 0 0 12.62-7.37.9.9 0 0 1 .58-.44 1 1 0 0 1 .75.09 1 1 0 0 1 .42 1.33Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPizzaSlice);
export default ForwardRef;
