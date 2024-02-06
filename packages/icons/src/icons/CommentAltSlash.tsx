import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentAltSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M10.66 6H17a1 1 0 0 1 1 1v6.34a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3h-6.34a1 1 0 0 0 0 2m11.05 14.29-18-18a1 1 0 0 0-1.42 1.42l2 2A3 3 0 0 0 4 7v12a1 1 0 0 0 .62.92A.84.84 0 0 0 5 20a1 1 0 0 0 .71-.29L8.41 17h7.18l4.7 4.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M8 15a1 1 0 0 0-.71.29L6 16.59V7.41L13.59 15Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentAltSlash);
export default ForwardRef;
