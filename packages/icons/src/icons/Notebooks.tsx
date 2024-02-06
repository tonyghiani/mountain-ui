import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgNotebooks = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 6a1 1 0 0 0-1 1v10a3 3 0 0 1-3 3H7a1 1 0 0 0 0 2h10a5 5 0 0 0 5-5V7a1 1 0 0 0-1-1m-3 9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3M10 4h2v4.86l-.36-.3a1 1 0 0 0-1.28 0l-.36.3ZM4 15V5a1 1 0 0 1 1-1h3v7a1 1 0 0 0 1.65.76L11 10.63l1.35 1.13A1 1 0 0 0 13 12a1.1 1.1 0 0 0 .42-.09A1 1 0 0 0 14 11V4h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgNotebooks);
export default ForwardRef;
