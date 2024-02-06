import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGraduationCap = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.49 10.19-1-.55-9-5h-.11a1 1 0 0 0-.19-.06h-.37a1 1 0 0 0-.2.06h-.11l-9 5a1 1 0 0 0 0 1.74L4 12.76v4.74a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.74l2-1.12v2.86a1 1 0 0 0 2 0v-3.44a1 1 0 0 0-.51-.87M16 17.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.63l4.51 2.5.15.06h.09a1 1 0 0 0 .25 0 1 1 0 0 0 .25 0h.09a.5.5 0 0 0 .15-.06l4.51-2.5Zm-5-3.14L4.06 10.5 11 6.64l6.94 3.86Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGraduationCap);
export default ForwardRef;
