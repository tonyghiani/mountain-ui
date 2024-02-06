import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArrowCircleUp = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12.71 8.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArrowCircleUp);
export default ForwardRef;
