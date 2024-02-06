import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentDownload = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 14a1 1 0 0 0-1.22.72A7 7 0 0 1 11 20H5.41l.64-.63a1 1 0 0 0 0-1.41A7 7 0 0 1 11 6a9 9 0 0 1 .88 0 1 1 0 1 0 .24-2A8 8 0 0 0 11 4a9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 8.72-6.75A1 1 0 0 0 19 14m2.71-6.74a1 1 0 0 0-1.42 0L19 8.59V3a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 1 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a1 1 0 0 0 0-1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentDownload);
export default ForwardRef;
