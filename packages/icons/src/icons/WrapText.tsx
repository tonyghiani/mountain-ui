import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWrapText = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m6 8H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m9.5-5H3a1 1 0 0 0 0 2h15.5a1.5 1.5 0 0 1 0 3h-3.09l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29h3.09a3.5 3.5 0 0 0 0-7' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWrapText);
export default ForwardRef;
