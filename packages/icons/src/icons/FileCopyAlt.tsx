import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileCopyAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 20H8a3 3 0 0 1-3-3V7a1 1 0 0 0-2 0v10a5 5 0 0 0 5 5h8a1 1 0 0 0 0-2m-6-7a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-5a1 1 0 0 0-1 1m11-4.06a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0 .9.9 0 0 0-.33-.11H10a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8.94m-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM19 15a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 .18 1H11a1 1 0 0 0 0 2h8Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileCopyAlt);
export default ForwardRef;
