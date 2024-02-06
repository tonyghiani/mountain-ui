import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgNinja = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m19.44 5.34-.06-.07a10 10 0 0 0-14.76 0l-.06.07A10 10 0 1 0 22 12a9.93 9.93 0 0 0-2.56-6.66M12 4a7.87 7.87 0 0 1 3.86 1H8.14A7.87 7.87 0 0 1 12 4M5.76 7h12.48a8 8 0 0 1 1.69 4H4.07a8 8 0 0 1 1.69-4M12 20a8 8 0 0 1-7.93-7h15.86A8 8 0 0 1 12 20M8 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3 9.93a1 1 0 0 0 .49.13 1 1 0 0 0 .87-.51A3 3 0 0 1 15 16a1 1 0 0 0 0-2 5 5 0 0 0-4.37 2.57 1 1 0 0 0 .37 1.36' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgNinja);
export default ForwardRef;
