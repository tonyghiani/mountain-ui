import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgClub = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21 12.5a5.52 5.52 0 0 0-3.51-5.12 5.49 5.49 0 0 0-11 0A5.5 5.5 0 0 0 8.5 18h.2a6.9 6.9 0 0 1-1.24 2.39A1 1 0 0 0 8.24 22h7.52a1 1 0 0 0 .78-1.63A6.9 6.9 0 0 1 15.3 18h.2a5.51 5.51 0 0 0 5.5-5.5M10.06 20a8.9 8.9 0 0 0 .81-2.56 5.5 5.5 0 0 0 1.13-.7 5.5 5.5 0 0 0 1.13.7 8.9 8.9 0 0 0 .81 2.56Zm2.72-5.3-.08-.08-.08-.08h-.07l-.18-.09-.18-.06h-.38l-.18.06a.6.6 0 0 0-.17.09h-.08l-.08.08-.08.08a3.5 3.5 0 1 1-3.47-5.62A1 1 0 0 0 7.91 9a1.4 1.4 0 0 0 .18-.08 1 1 0 0 0 .14-.13.62.62 0 0 0 .21-.31.6.6 0 0 0 .07-.17.7.7 0 0 0 0-.2 1 1 0 0 0 0-.17 3 3 0 0 1 0-.45 3.5 3.5 0 0 1 7 0 3 3 0 0 1 0 .45 1 1 0 0 0 0 .16.7.7 0 0 0 0 .21.6.6 0 0 0 .07.17.62.62 0 0 0 .21.31 1 1 0 0 0 .14.13 1.4 1.4 0 0 0 .18.08 1 1 0 0 0 .16.07 3.5 3.5 0 1 1-3.47 5.62Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgClub);
export default ForwardRef;
