import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgInbox = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.056 2h-14a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3m-14 2h14a1 1 0 0 1 1 1v8H17.59a2 2 0 0 0-1.664.89L14.52 16H9.59l-1.406-2.11A2 2 0 0 0 6.52 13H4.056V5a1 1 0 0 1 1-1m14 16h-14a1 1 0 0 1-1-1v-4H6.52l1.406 2.11A2 2 0 0 0 9.59 18h4.93a2 2 0 0 0 1.664-.89L17.59 15h2.465v4a1 1 0 0 1-1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgInbox);
export default ForwardRef;
