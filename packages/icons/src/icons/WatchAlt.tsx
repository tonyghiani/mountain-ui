import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgWatchAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m17 8.61-1-5.77A1 1 0 0 0 15 2H9a1 1 0 0 0-1 .84L7 8.61a6 6 0 0 0 0 6.78l1 5.77A1 1 0 0 0 9 22h6a1 1 0 0 0 1-.84l1-5.77a6 6 0 0 0 0-6.78M9.85 4h4.3l.44 2.59a6 6 0 0 0-5.18 0Zm4.3 16h-4.3l-.44-2.59a6 6 0 0 0 5.18 0ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgWatchAlt);
export default ForwardRef;
