import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBalanceScale = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22.964 13.823a1 1 0 0 0-.028-.175l-2.305-6.137A3 3 0 0 0 22 5a1 1 0 0 0-2 0 1 1 0 0 1-1.882.473A2.89 2.89 0 0 0 15.54 4H13V3a1 1 0 0 0-2 0v1H8.46a2.89 2.89 0 0 0-2.578 1.473A1 1 0 0 1 4 5a1 1 0 0 0-2 0 3 3 0 0 0 1.369 2.511l-2.305 6.137a1 1 0 0 0-.028.175A1 1 0 0 0 1 14q.001.014.003.027.001.019.004.039a3.994 3.994 0 0 0 7.986 0q.003-.02.004-.039.001-.014.003-.027a1 1 0 0 0-.036-.177 1 1 0 0 0-.028-.175L6.629 7.504A3 3 0 0 0 7.643 6.42.92.92 0 0 1 8.46 6H11v14H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3V6h2.54a.92.92 0 0 1 .817.42 3 3 0 0 0 1.014 1.084l-2.307 6.144a1 1 0 0 0-.028.175A1 1 0 0 0 15 14q.002.014.003.027.001.019.004.039a3.994 3.994 0 0 0 7.986 0q.003-.02.004-.039Q23 14.013 23 14a1 1 0 0 0-.036-.177M5 8.856 6.556 13H3.444ZM6.723 15A2.02 2.02 0 0 1 5 16a2 2 0 0 1-1.731-1ZM19 8.856 20.556 13h-3.112ZM19 16a2 2 0 0 1-1.731-1h3.454A2.02 2.02 0 0 1 19 16' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBalanceScale);
export default ForwardRef;
