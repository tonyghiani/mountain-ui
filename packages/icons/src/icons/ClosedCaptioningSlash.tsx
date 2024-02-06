import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgClosedCaptioningSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8 7.92 7.92 0 0 1 1.69-4.9L7.2 8.61A3 3 0 0 0 6 11v2a3 3 0 0 0 5.59 1.5 1 1 0 1 0-1.72-1 1 1 0 0 1-1.58.19A.93.93 0 0 1 8 13v-2a1 1 0 0 1 .67-.92L12 13.46A3 3 0 0 0 14.54 16l2.36 2.36A7.92 7.92 0 0 1 12 20m6.31-3.1-1.52-1.52a2.9 2.9 0 0 0 .8-.88 1 1 0 1 0-1.72-1 1 1 0 0 1-.55.41L14 12.59V11a1 1 0 0 1 1.88-.48 1 1 0 0 0 1.37.34 1 1 0 0 0 .34-1.38 3 3 0 0 0-.46-.59A3 3 0 0 0 12 10.62l-.35-.35a1 1 0 0 0-.1-.79 3 3 0 0 0-.46-.59 2.94 2.94 0 0 0-1.67-.84L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8 7.92 7.92 0 0 1-1.69 4.9' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgClosedCaptioningSlash);
export default ForwardRef;
