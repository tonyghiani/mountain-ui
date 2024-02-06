import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10.19 5.23A7.1 7.1 0 0 1 12 5a7 7 0 0 1 7 7 7.1 7.1 0 0 1-.23 1.81 1 1 0 0 0 .7 1.23 1.2 1.2 0 0 0 .26 0 1 1 0 0 0 1-.74A9 9 0 0 0 21 12a9 9 0 0 0-9-9 9 9 0 0 0-2.33.3A1 1 0 0 0 9 4.53a1 1 0 0 0 1.19.7m11.52 15.06-18-18a1 1 0 0 0-1.42 1.42L5 6.38a9 9 0 0 0 0 11.24l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 21h8a9 9 0 0 0 5.62-2l2.67 2.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39M12 19H6.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1-.65-9.15l9.79 9.79A7 7 0 0 1 12 19' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentSlash);
export default ForwardRef;
