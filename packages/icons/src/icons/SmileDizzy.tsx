import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgSmileDizzy = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0 1 1 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1 1 0 1 0-1.28-1.54M9 11.71l.29-.3.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29.3-.29a1 1 0 0 0-1.46-1.42l-.29.3-.25-.3a1 1 0 1 0-1.46 1.42l.3.29-.3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m5-11.71a1 1 0 0 0-1.42 0l-.29.3-.29-.3a1 1 0 0 0-1.42 1.42l.3.29-.3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.29-.3.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29.3-.29a1 1 0 0 0 0-1.42' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgSmileDizzy);
export default ForwardRef;
