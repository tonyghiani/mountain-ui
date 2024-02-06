import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgStore = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22 7.82a1 1 0 0 0 0-.19l-2-5A1 1 0 0 0 19 2H5a1 1 0 0 0-.93.63l-2 5a1 1 0 0 0 0 .19A.6.6 0 0 0 2 8a4 4 0 0 0 2 3.4V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.56A4 4 0 0 0 22 8a.6.6 0 0 0 0-.18M13 20h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6v-8a4 4 0 0 0 3-1.38 4 4 0 0 0 6 0A4 4 0 0 0 18 12Zm0-10a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-4 0 1 1 0 0 0-2 0 2 2 0 0 1-4 .15L5.68 4h12.64L20 8.15A2 2 0 0 1 18 10' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgStore);
export default ForwardRef;
