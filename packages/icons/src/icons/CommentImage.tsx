import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentImage = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 0 0-9.56 12.91.3.3 0 0 0 0 .1 9.8 9.8 0 0 0 1.79 3.32l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 9.46-6.78v-.08A9.9 9.9 0 0 0 22 12 10 10 0 0 0 12 2m0 18H5.41l.3-.29 8.41-8.42a1 1 0 0 1 1.4 0l3.62 3.6.23.22A8 8 0 0 1 12 20m-7.46-5.13 1.58-1.58a1 1 0 0 1 1.41 0l.87.87-2.72 2.74a7.7 7.7 0 0 1-1.14-2.03m15.41-2-3-3a3 3 0 0 0-4.24 0l-2.89 2.89-.88-.87a3 3 0 0 0-4.23 0l-.71.67A5 5 0 0 1 4 12a8 8 0 0 1 16 0 8 8 0 0 1 0 .86Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentImage);
export default ForwardRef;
