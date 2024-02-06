import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgImageQuestion = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 13a1 1 0 0 0-1 1v.39l-1.48-1.48a2.77 2.77 0 0 0-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 0 0-3.93 0L4 12.6V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.57l2.9-2.9a.79.79 0 0 1 1.09 0l3.17 3.17 4.29 4.3Zm13-1a1 1 0 0 1-.18.53L13.31 15l.7-.7a.78.78 0 0 1 1.1 0L18 17.22Zm1-17a3 3 0 0 0-2.6 1.5 1 1 0 0 0 .37 1.37 1 1 0 0 0 1.36-.37A1 1 0 0 1 20 5a1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 0 0 0-6m.38 7.08A1 1 0 0 0 18.8 9l-.18.06-.18.09-.15.13A1 1 0 0 0 18 10a1 1 0 0 0 .29.71 1 1 0 0 0 1.42 0A1 1 0 0 0 20 10a1 1 0 0 0-.62-.92' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgImageQuestion);
export default ForwardRef;
