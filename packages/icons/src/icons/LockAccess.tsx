import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLockAccess = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 2h-6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m0 12a1 1 0 0 0-1 1v5h-5a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-9-8a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2V9a3 3 0 0 0-3-3m-1 3a1 1 0 0 1 2 0v1h-2Zm4 7H9v-4h6ZM3 10a1 1 0 0 0 1-1V4h5a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m6 10H4v-5a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLockAccess);
export default ForwardRef;
