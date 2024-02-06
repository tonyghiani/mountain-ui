import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentAltDownload = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M6.12 11.92a.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l3-3a1 1 0 1 0-1.42-1.42L7.5 8.59V3a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 1 0-1.42 1.42l3 3a1 1 0 0 0 .33.21M18.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H8.5a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 .68.27 1.1 1.1 0 0 0 .4-.08 1 1 0 0 0 .6-.92V9a3 3 0 0 0-3.04-3' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentAltDownload);
export default ForwardRef;
