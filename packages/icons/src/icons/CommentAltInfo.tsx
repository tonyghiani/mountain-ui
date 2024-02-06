import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentAltInfo = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5 11a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m-.71-7.29a1 1 0 0 0 1.09.21 1.2 1.2 0 0 0 .33-.21 1.2 1.2 0 0 0 .21-.33A.84.84 0 0 0 6 3a1 1 0 0 0-.29-.71 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21A1 1 0 0 0 4 3a1 1 0 0 0 .08.38 1.2 1.2 0 0 0 .21.33M17 6H9a1 1 0 0 0 0 2h8a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H7a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 19 22a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 20 21V9a3 3 0 0 0-3-3' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentAltInfo);
export default ForwardRef;
