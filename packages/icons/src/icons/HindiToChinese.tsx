import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgHindiToChinese = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.022 2h-2a1 1 0 0 0 0 2v2H7.838a3 3 0 0 0 .184-1 3 3 0 0 0-5.598-1.5 1 1 0 1 0 1.732 1 1 1 0 0 1 .866-.5 1 1 0 0 1 0 2 1 1 0 0 0 0 2 1 1 0 0 1 0 2 1 1 0 0 1-.866-.5 1 1 0 1 0-1.732 1A3 3 0 0 0 8.022 9a3 3 0 0 0-.184-1h1.184v3a1 1 0 0 0 2 0V4a1 1 0 0 0 0-2m3 5h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2m-4 9h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2m11-1a1 1 0 0 0 0-2h-3v-.5a1 1 0 0 0-2 0v.5h-3a1 1 0 0 0 0 2h5.184a6.7 6.7 0 0 1-1.225 2.527 6.7 6.7 0 0 1-.63-.983 1 1 0 1 0-1.779.912 8.7 8.7 0 0 0 .96 1.468 6.6 6.6 0 0 1-2.426 1.099 1 1 0 0 0 .427 1.954 8.6 8.6 0 0 0 3.445-1.622 8.7 8.7 0 0 0 3.469 1.622 1 1 0 1 0 .43-1.954 6.7 6.7 0 0 1-2.446-1.09A8.74 8.74 0 0 0 20.244 15Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgHindiToChinese);
export default ForwardRef;
