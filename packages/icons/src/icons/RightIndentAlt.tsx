import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRightIndentAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M3.64 9.56a1 1 0 1 0-1.28 1.54l1.08.9-1.08.9a1 1 0 0 0-.13 1.41 1 1 0 0 0 1.41.13l2-1.67a1 1 0 0 0 0-1.54ZM9 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m4 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2m8 10h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0-8h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRightIndentAlt);
export default ForwardRef;
