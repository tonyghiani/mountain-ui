import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgBoltAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.89 9.55A1 1 0 0 0 19 9h-5V3a1 1 0 0 0-.69-1 1 1 0 0 0-1.12.36l-8 11a1 1 0 0 0-.08 1A1 1 0 0 0 5 15h5v6a1 1 0 0 0 .69.95A1.1 1.1 0 0 0 11 22a1 1 0 0 0 .81-.41l8-11a1 1 0 0 0 .08-1.04M12 17.92V14a1 1 0 0 0-1-1H7l5-6.92V10a1 1 0 0 0 1 1h4Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgBoltAlt);
export default ForwardRef;
