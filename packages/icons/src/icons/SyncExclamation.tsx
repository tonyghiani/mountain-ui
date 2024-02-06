import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSyncExclamation = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.29 15.71A1 1 0 0 0 13 15a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21A1.05 1.05 0 0 0 11 15a1 1 0 0 0 .29.71m8.62-.2h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0 10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99M12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2m0 11a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSyncExclamation);
export default ForwardRef;
