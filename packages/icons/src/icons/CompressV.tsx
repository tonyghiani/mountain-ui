import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCompressV = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.71 13.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42l.79-.8V21a1 1 0 0 0 2 0v-4.59l.79.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-1.42-2.58a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 1 0-1.42-1.42l-.79.8V3a1 1 0 0 0-2 0v4.59l-.79-.8a1 1 0 1 0-1.42 1.42Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCompressV);
export default ForwardRef;
