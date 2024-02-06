import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudInfo = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
  <MntIcon {...props}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      ref={ref}
    >
      <path d='M11.29 12.29A1 1 0 0 0 12 14h.19a.6.6 0 0 0 .19-.06.6.6 0 0 0 .17-.09l.15-.12a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41-.02M12 15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m6.42-6.78a7 7 0 0 0-13.36 1.89A4 4 0 0 0 6 18h2a1 1 0 0 0 0-2H6a2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67A3 3 0 0 1 20 13a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5 5 0 0 0 1.42-9.78' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudInfo);
export default ForwardRef;
