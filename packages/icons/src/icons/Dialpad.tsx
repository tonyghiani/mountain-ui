import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgDialpad = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M7 2.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4A.76.76 0 0 0 7.75 7V3A.76.76 0 0 0 7 2.25m-.75 4h-2.5v-2.5h2.5Zm14.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm-6.25-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5ZM7 9.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4A.76.76 0 0 0 7 9.25m-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm-6.25 3h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgDialpad);
export default ForwardRef;
