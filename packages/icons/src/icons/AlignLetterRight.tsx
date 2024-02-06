import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAlignLetterRight = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 4h11a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2m11 16H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-14H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 10H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-6H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAlignLetterRight);
export default ForwardRef;
