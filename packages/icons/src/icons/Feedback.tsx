import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFeedback = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22 1h-7a2.44 2.44 0 0 0-2.41 2l-.92 5.05a2.44 2.44 0 0 0 .53 2 2.47 2.47 0 0 0 1.88.88H17l-.25.66a3.26 3.26 0 0 0 3 4.41 1 1 0 0 0 .92-.59l2.24-5.06A1 1 0 0 0 23 10V2a1 1 0 0 0-1-1m-1 8.73-1.83 4.13a1.3 1.3 0 0 1-.45-.4 1.23 1.23 0 0 1-.14-1.16l.38-1a1.68 1.68 0 0 0-.2-1.58A1.7 1.7 0 0 0 17.35 9h-3.29a.46.46 0 0 1-.35-.16.5.5 0 0 1-.09-.37l.92-5A.44.44 0 0 1 15 3h6ZM9.94 13.05H7.05l.25-.66A3.26 3.26 0 0 0 4.25 8a1 1 0 0 0-.92.59l-2.24 5.06a1 1 0 0 0-.09.4v8a1 1 0 0 0 1 1h7a2.44 2.44 0 0 0 2.41-2l.92-5a2.44 2.44 0 0 0-.53-2 2.47 2.47 0 0 0-1.86-1m-.48 7.58A.44.44 0 0 1 9 21H3v-6.73l1.83-4.13a1.3 1.3 0 0 1 .45.4 1.23 1.23 0 0 1 .14 1.16l-.38 1a1.68 1.68 0 0 0 .2 1.58 1.7 1.7 0 0 0 1.41.74h3.29a.46.46 0 0 1 .35.16.5.5 0 0 1 .09.37Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFeedback);
export default ForwardRef;
