import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArchive = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 14h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m9-11H5a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h1v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8h1a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3m-1 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8h12Zm2-10H4V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;
