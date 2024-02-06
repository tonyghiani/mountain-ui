import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgAnnoyedAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m14.66 13.56-4.19 1.5A1 1 0 0 0 10.8 17a1 1 0 0 0 .34-.06l4.2-1.5a1 1 0 1 0-.68-1.88m-4-5a1 1 0 0 0-1.41 0 1 1 0 0 1-1.42 0 1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42 3 3 0 0 0 4.24 0 1 1 0 0 0-.04-1.44Zm7 0a1 1 0 0 0-1.41 0 1 1 0 0 1-1.42 0 1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42 3 3 0 0 0 4.24 0 1 1 0 0 0-.04-1.44ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgAnnoyedAlt);
export default ForwardRef;
