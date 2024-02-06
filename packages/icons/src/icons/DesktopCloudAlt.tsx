import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDesktopCloudAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M4.5 10H10a3 3 0 0 0 1.07-5.8 4 4 0 0 0-7.48 1A2.5 2.5 0 0 0 4.5 10m0-3a1 1 0 0 0 1-1 2 2 0 0 1 3.89-.64 1 1 0 0 0 .78.66A1 1 0 0 1 11 7a1 1 0 0 1-1 1H4.5a.5.5 0 0 1 0-1M19 2h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h3v2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-3v-2h3a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 18h-4v-2h4Zm6-5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDesktopCloudAlt);
export default ForwardRef;
