import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHeadphonesAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 13.18V11a8 8 0 0 0-16 0v2.18A3 3 0 0 0 2 16v2a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6v-2a6 6 0 0 1 12 0v2h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-2a3 3 0 0 0-2-2.82M7 15v4H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm13 3a1 1 0 0 1-1 1h-2v-4h2a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHeadphonesAlt);
export default ForwardRef;
