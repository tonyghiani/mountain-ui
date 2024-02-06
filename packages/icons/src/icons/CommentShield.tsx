import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentShield = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.7 2.86a1 1 0 0 0-.84-.2 3 3 0 0 1-2.33-.48 1 1 0 0 0-1.15 0 3 3 0 0 1-2.33.48 1 1 0 0 0-.84.2 1 1 0 0 0-.37.77V7a4.56 4.56 0 0 0 1.91 3.7l1.62 1.16a1 1 0 0 0 1.17 0l1.62-1.16A4.56 4.56 0 0 0 22.07 7V3.63a1 1 0 0 0-.37-.77M20.07 7A2.57 2.57 0 0 1 19 9l-1 .74L16.91 9a2.57 2.57 0 0 1-1.07-2V4.72A5.2 5.2 0 0 0 18 4.17a5.1 5.1 0 0 0 2.11.55Zm-1.14 7a1 1 0 0 0-1.21.72A7 7 0 0 1 10.93 20H5.35l.65-.63A1 1 0 0 0 6 18a7 7 0 0 1 4.93-12 1 1 0 0 0 0-2 9 9 0 0 0-7 14.62l-1.7 1.67a1 1 0 0 0 .7 1.71h8a9 9 0 0 0 8.72-6.75 1 1 0 0 0-.72-1.25' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentShield);
export default ForwardRef;
