import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentAltCheck = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m6.77 9.15 5.44-5.44a1 1 0 1 0-1.42-1.42L6.06 7 4.21 5.17a1 1 0 0 0-1.42 1.42l2.56 2.56a1 1 0 0 0 1.42 0M18.5 6H13a1 1 0 0 0 0 2h5.5a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H8.5a1 1 0 0 1-1-1v-3.5a1 1 0 0 0-2 0V16a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 .68.27 1.1 1.1 0 0 0 .4-.08 1 1 0 0 0 .6-.92V9a3 3 0 0 0-3.04-3' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentAltCheck);
export default ForwardRef;
