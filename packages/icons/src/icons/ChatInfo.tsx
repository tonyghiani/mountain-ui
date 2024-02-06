import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgChatInfo = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.29 3.71a1 1 0 0 0 1.42 0 1.2 1.2 0 0 0 .21-.33A1 1 0 0 0 21 3a1 1 0 0 0-.29-.71l-.15-.12a.8.8 0 0 0-.18-.09 1 1 0 0 0-1.09.21A1 1 0 0 0 19 3a1 1 0 0 0 .08.38 1.2 1.2 0 0 0 .21.33M20 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m.06 8a1 1 0 0 0-1.11.87A7 7 0 0 1 12 20H6.41l.64-.63a1 1 0 0 0 0-1.41A7 7 0 0 1 12 6a6.9 6.9 0 0 1 3.49.94 1 1 0 0 0 1-1.72A8.84 8.84 0 0 0 12 4a9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 22h8a9 9 0 0 0 8.93-7.88 1 1 0 0 0-.87-1.12' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgChatInfo);
export default ForwardRef;
