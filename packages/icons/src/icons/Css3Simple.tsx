import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCss3Simple = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.772 3.364A1 1 0 0 0 20 3H6a1 1 0 0 0 0 2h12.786l-.78 4H5a1 1 0 0 0 0 2h12.615l-1.163 5.955-6.323 1.997-5.41-1.7.203-1.064a1 1 0 0 0-1.964-.375l-.37 1.94a1 1 0 0 0 .682 1.141l6.56 2.06a1 1 0 0 0 .601 0l7.19-2.27a1 1 0 0 0 .68-.763l2.68-13.73a1 1 0 0 0-.209-.827' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCss3Simple);
export default ForwardRef;
