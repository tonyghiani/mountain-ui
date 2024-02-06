import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPagelines = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18.885 13.993c1.75-.901 2.282-3.35 2.282-3.35s-2.305-.99-4.055-.085a4.2 4.2 0 0 0-1.698 1.822 9 9 0 0 0 .06-.99 7 7 0 0 0 1.582-4.726C16.712 3.901 13.71 2 13.71 2s-2.442 2.583-2.095 5.35a6.82 6.82 0 0 0 2.518 4.03 9 9 0 0 1-.076 1.01 4.4 4.4 0 0 0-1.9-2.058c-1.774-.853-4.049.203-4.049.203s.603 2.432 2.376 3.284a4.72 4.72 0 0 0 3.258.076 9.4 9.4 0 0 1-1.458 2.9 4.4 4.4 0 0 0-2.012-1.98c-1.813-.763-4.028.404-4.028.404s.72 2.402 2.536 3.162a3.74 3.74 0 0 0 1.735.243 9.42 9.42 0 0 1-5.845 2.032.672.672 0 0 0 0 1.344 10.79 10.79 0 0 0 7.968-3.527 4.95 4.95 0 0 0 3.336 1.194c1.96-.207 3.34-2.299 3.34-2.299s-1.792-1.753-3.75-1.543a3.5 3.5 0 0 0-1.36.456 10.7 10.7 0 0 0 .895-2.275 5.15 5.15 0 0 0 3.786-.013' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPagelines);
export default ForwardRef;
