import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHouseUser = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.664 10.252-9-8a1 1 0 0 0-1.328 0l-9 8a1 1 0 0 0 1.328 1.496L4 11.449V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551l.336.299a1 1 0 0 0 1.328-1.496M9.184 20a2.982 2.982 0 0 1 5.632 0Zm1.316-5.5A1.5 1.5 0 1 1 12 16a1.5 1.5 0 0 1-1.5-1.5M18 20h-1.101a5 5 0 0 0-2.259-3.228 3.47 3.47 0 0 0 .86-2.272 3.5 3.5 0 0 0-7 0 3.47 3.47 0 0 0 .86 2.272A5 5 0 0 0 7.1 20H6V9.671l6-5.333 6 5.333Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHouseUser);
export default ForwardRef;
