import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentVerify = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m15.29 8.85-4.73 4.74-1.85-1.86a1 1 0 0 0-1.42 1.42l2.56 2.56a1 1 0 0 0 1.42 0l5.44-5.44a1 1 0 1 0-1.42-1.42M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentVerify);
export default ForwardRef;
