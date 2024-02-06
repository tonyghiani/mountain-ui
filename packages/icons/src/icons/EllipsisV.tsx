import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgEllipsisV = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2m0 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2m0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgEllipsisV);
export default ForwardRef;
