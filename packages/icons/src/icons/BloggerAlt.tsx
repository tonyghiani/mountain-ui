import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBloggerAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M13.991 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-4-2h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m6-1V9a4.004 4.004 0 0 0-4-4h-2a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-1a3.005 3.005 0 0 0-3-3m0 0v.001h-1Zm1 4a3.003 3.003 0 0 1-3 3h-4a3.003 3.003 0 0 1-3-3v-4a3.003 3.003 0 0 1 3-3h2a2.003 2.003 0 0 1 2 2v1a2.003 2.003 0 0 0 2 2 1 1 0 0 1 1 1Zm3-13h-16a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3m1 19a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBloggerAlt);
export default ForwardRef;
