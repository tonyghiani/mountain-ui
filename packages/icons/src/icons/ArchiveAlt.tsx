import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgArchiveAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M10 13h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m9-10H5a3 3 0 0 0-1 5.82V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.82A3 3 0 0 0 19 3m-1 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12Zm1-11H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgArchiveAlt);
export default ForwardRef;
