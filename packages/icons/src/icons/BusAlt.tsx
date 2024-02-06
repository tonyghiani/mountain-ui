import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBusAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18.5 2h-12a3 3 0 0 0-3 3v12a3 3 0 0 0 2 2.82V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 2-2.82V5a3 3 0 0 0-3-3m-13 6h6v4h-6Zm14 9a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-3h14Zm0-5h-6V8h6Zm0-6h-14V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-3.38 10.92a1 1 0 0 0 .38.08 1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.06-.18.8.8 0 0 0-.09-.18 2 2 0 0 0-.12-.15l-.15-.12a.8.8 0 0 0-.18-.09.6.6 0 0 0-.2-.08 1 1 0 0 0-.91.27 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .29.7 1 1 0 0 0 .31.24m-8 0a1 1 0 0 0 .38.08 1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.06-.18.8.8 0 0 0-.09-.18 2 2 0 0 0-.12-.15l-.15-.12-.18-.09-.2-.08a1 1 0 0 0-.91.27 2 2 0 0 0-.12.15.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .29.7 1 1 0 0 0 .31.24' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBusAlt);
export default ForwardRef;
