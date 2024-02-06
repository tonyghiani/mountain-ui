import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudRain = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.56 12.67a1 1 0 0 0-1.12 0c-.11.08-2.69 1.86-2.69 4.58a3.25 3.25 0 0 0 6.5 0c0-2.75-2.58-4.51-2.69-4.58M12 18.5a1.25 1.25 0 0 1-1.25-1.25A3.66 3.66 0 0 1 12 14.8a3.6 3.6 0 0 1 1.25 2.45A1.25 1.25 0 0 1 12 18.5m6.42-10.78A7 7 0 0 0 5.06 9.61a4 4 0 0 0 .61 7.87h.08a1 1 0 0 0 1-.92 1 1 0 0 0-.92-1.08A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 .43 5.79 1 1 0 0 0 .62 1.9 5 5 0 0 0-.14-9.53' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudRain);
export default ForwardRef;
