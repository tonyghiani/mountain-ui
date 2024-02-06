import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLetterChineseA = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 5h-7V4a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h11.882a14.5 14.5 0 0 1-3.94 7.952A14.4 14.4 0 0 1 8.663 9.67a1 1 0 0 0-1.889.66 16.4 16.4 0 0 0 3.68 5.958 14.3 14.3 0 0 1-5.768 2.735A1 1 0 0 0 4.899 21a1 1 0 0 0 .215-.023 16.3 16.3 0 0 0 6.831-3.319 16.4 16.4 0 0 0 6.842 3.319 1 1 0 0 0 .426-1.954 14.4 14.4 0 0 1-5.79-2.733A16.48 16.48 0 0 0 17.893 7H20a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLetterChineseA);
export default ForwardRef;
