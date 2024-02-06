import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAlignCenterJustify = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 15H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2M3 5h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m14 14H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m4-12H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAlignCenterJustify);
export default ForwardRef;
