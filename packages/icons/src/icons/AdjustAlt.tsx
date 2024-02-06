import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAdjustAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.83 7.32a.2.2 0 0 0 0-.08 10 10 0 0 0-3.38-3.65A9.9 9.9 0 0 0 12 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h.28a10 10 0 0 0 8.55-14.68M13 4.06a8 8 0 0 1 2.49.74L13 9.12Zm0 9.06 4.17-7.22a7.9 7.9 0 0 1 1.58 1.83L13 17.69Zm1.16 6.57L19.75 10a8.4 8.4 0 0 1 .25 2 7.94 7.94 0 0 1-5.84 7.69' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAdjustAlt);
export default ForwardRef;
