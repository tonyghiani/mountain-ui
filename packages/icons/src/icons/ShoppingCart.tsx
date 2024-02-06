import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgShoppingCart = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19M19 16H7a1 1 0 0 1 0-2h8.491a3.01 3.01 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74A3.01 3.01 0 0 0 3.92 3H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2m-1.326-9-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgShoppingCart);
export default ForwardRef;
