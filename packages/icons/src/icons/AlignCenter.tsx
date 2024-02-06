import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAlignCenter = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m4 2a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm14 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-4 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAlignCenter);
export default ForwardRef;
