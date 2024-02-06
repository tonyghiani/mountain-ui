import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgTornado = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 21H8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m1-4H6a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m7-15a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1m3 3H6a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2m-2 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2m-5 4H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgTornado);
export default ForwardRef;
