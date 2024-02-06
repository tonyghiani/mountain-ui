import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgListUiAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M3.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 2h14a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2m0 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1m10-5h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0 5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgListUiAlt);
export default ForwardRef;
