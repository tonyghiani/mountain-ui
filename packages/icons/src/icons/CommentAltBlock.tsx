import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentAltBlock = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H9a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 21 22a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 22 21V9a3 3 0 0 0-3-3m-8.46 4.54A5 5 0 1 0 7 12a5 5 0 0 0 3.54-1.46M4 7a3 3 0 0 1 3-3 3 3 0 0 1 1.28.3l-4 4A3 3 0 0 1 4 7m5.7-1.29A3 3 0 0 1 10 7a3 3 0 0 1-4.28 2.7Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentAltBlock);
export default ForwardRef;
