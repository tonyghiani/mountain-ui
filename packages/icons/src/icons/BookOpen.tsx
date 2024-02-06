import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBookOpen = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.17 2.06A13 13 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2 13 13 0 0 0-2.17.19 1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1 10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.9.9 0 0 0 .7 0h.11l.12-.07A10.9 10.9 0 0 1 20.83 16 1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94M11 15.35a12.9 12.9 0 0 0-6-1.48H4v-10a9 9 0 0 1 1 0 10.86 10.86 0 0 1 6 1.8Zm9-1.44h-1a12.9 12.9 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8 9 9 0 0 1 1 0Zm1.17 4.15a13 13 0 0 0-2.17-.19 12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2.05 13 13 0 0 0-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79 10.9 10.9 0 0 1 8.25 1.91 1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79 1 1 0 0 0-.83-1.15' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBookOpen);
export default ForwardRef;
