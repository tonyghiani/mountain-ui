import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgLinkBroken = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M4.76 10.59a1 1 0 0 0 .26-2l-1.76-.44a1 1 0 1 0-.52 1.93l1.76.47a.8.8 0 0 0 .26.04M8.62 5a1 1 0 0 0 1 .74.8.8 0 0 0 .26 0 1 1 0 0 0 .7-1.22l-.47-1.76a1 1 0 1 0-1.93.52Zm4.83 10A1 1 0 0 0 12 15l-3.5 3.56a2.21 2.21 0 0 1-3.06 0 2.15 2.15 0 0 1 0-3.06L9 12a1 1 0 1 0-1.41-1.41L4 14.08A4.17 4.17 0 1 0 9.92 20l3.53-3.53a1 1 0 0 0 0-1.47M5.18 6.59a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41L5.3 3.89A1 1 0 0 0 3.89 5.3Zm16.08 7.33-1.76-.47a1 1 0 1 0-.5 1.93l1.76.47h.26a1 1 0 0 0 .26-2ZM15.38 19a1 1 0 0 0-1.23-.7 1 1 0 0 0-.7 1.22l.47 1.76a1 1 0 0 0 1 .74 1.2 1.2 0 0 0 .26 0 1 1 0 0 0 .71-1.23Zm3.44-1.57a1 1 0 0 0-1.41 1.41l1.29 1.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM21.2 7a4.16 4.16 0 0 0-7.12-3l-3.53 3.56A1 1 0 1 0 12 9l3.5-3.56a2.21 2.21 0 0 1 3.06 0 2.15 2.15 0 0 1 0 3.06L15 12a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0L20 9.92A4.2 4.2 0 0 0 21.2 7' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgLinkBroken);
export default ForwardRef;
