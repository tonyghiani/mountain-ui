import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowBreak = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7 11h10a1 1 0 0 0 0-2h-4V5.41l.79.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42l.79-.8V9H7a1 1 0 0 0 0 2m10 2H7a1 1 0 0 0 0 2h4v3.59l-.79-.8a1 1 0 0 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 0 0-1.42-1.42l-.79.8V15h4a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowBreak);
export default ForwardRef;
