import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBus = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.5 17a1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.06-.18.8.8 0 0 0-.09-.18l-.12-.15a1 1 0 0 0-.33-.21 1 1 0 0 0-.6-.08l-.18.06-.18.09a2 2 0 0 0-.15.12l-.12.15a.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 1 1Zm8 0a1 1 0 0 0 1-1 1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.06-.18.8.8 0 0 0-.09-.18l-.12-.15a1.2 1.2 0 0 0-.33-.21 1 1 0 0 0-.76 0 1.2 1.2 0 0 0-.33.21l-.12.15a.8.8 0 0 0-.09.18.6.6 0 0 0-.06.18 1.4 1.4 0 0 0 0 .2 1 1 0 0 0 .29.7 1 1 0 0 0 .67.3m-3-12h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m5-3h-12a3 3 0 0 0-3 3v12a3 3 0 0 0 2 2.82V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 2-2.82V5a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-3h14Zm0-5h-14V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBus);
export default ForwardRef;
