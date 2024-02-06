import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBagSlash = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 6h-3V5a2 2 0 0 0-2-2h-4a1.9 1.9 0 0 0-.61.1 1 1 0 0 0-.64 1.27A1 1 0 0 0 10 5h4v1h-1.34a1 1 0 0 0 0 2H19a1 1 0 0 1 1 1v1.28l-2.57.86a1 1 0 0 0-.63 1.27 1 1 0 0 0 .95.68 1.2 1.2 0 0 0 .32-.05l1.93-.65v2.95a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3M3.71 2.29a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v9a3 3 0 0 0 3 3h14a3 3 0 0 0 .53-.06l.76.77a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM4 9a1 1 0 0 1 1-1h1.59l4 4H9.16L4 10.28Zm1 10a1 1 0 0 1-1-1v-5.61L8.68 14A1.2 1.2 0 0 0 9 14h3.59l5 5Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBagSlash);
export default ForwardRef;
