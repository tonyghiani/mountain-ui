import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgObjectGroup = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M16 10h-2V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-6 1v1H9V9h3v1h-1a1 1 0 0 0-1 1m5 4h-3v-3h3Zm6 3.28V5.72A2 2 0 1 0 18.28 3H5.72A2 2 0 1 0 3 5.72v12.56A2 2 0 1 0 5.72 21h12.56A2 2 0 1 0 21 18.28m-2 0a1.9 1.9 0 0 0-.72.72H5.72a1.9 1.9 0 0 0-.72-.72V5.72A1.9 1.9 0 0 0 5.72 5h12.56a1.9 1.9 0 0 0 .72.72Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgObjectGroup);
export default ForwardRef;
