import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentAltShare = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.5 6.5h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H9.5a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 .68.27 1.1 1.1 0 0 0 .4-.08 1 1 0 0 0 .6-.92v-12a3 3 0 0 0-3.04-3m-10 5a2 2 0 1 0-1.18-3.61l-1.75-.8 1.91-.88a2 2 0 0 0 1 .29 2 2 0 1 0-2-2l-1.9.87A2 2 0 0 0 4.5 5a2 2 0 0 0 0 4 2 2 0 0 0 .93-.24l2.09 1A2 2 0 0 0 9.5 11.5' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentAltShare);
export default ForwardRef;
