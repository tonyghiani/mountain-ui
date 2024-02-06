import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgThunderstormSun = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.58 16.5h-1.26l.86-1.5a1 1 0 1 0-1.73-1l-1.73 3a1 1 0 0 0 .86 1.5h1.27L9 20a1 1 0 0 0 1.74 1l1.73-3a1 1 0 0 0 0-1 1 1 0 0 0-.89-.5m9.42-9h-.8a4.3 4.3 0 0 0-.52-1.27l.56-.56a1 1 0 0 0-1.41-1.41l-.56.56A4.3 4.3 0 0 0 17 4.3v-.8a1 1 0 0 0-2 0v.8a4.3 4.3 0 0 0-1.27.52l-.56-.56a1 1 0 0 0-1.41 1.41l.56.57c-.09.15-.16.32-.24.48a5.9 5.9 0 0 0-1.58-.22 6 6 0 0 0-5.94 5.13 3.49 3.49 0 0 0-.34 6.62 1 1 0 1 0 .72-1.86 1.5 1.5 0 0 1 .56-2.89 1 1 0 0 0 1-1 4 4 0 0 1 7.78-1.29 1 1 0 0 0 .78.67 2.33 2.33 0 0 1 .25 4.53 1 1 0 0 0 .27 2 .8.8 0 0 0 .27 0 4.3 4.3 0 0 0 2.85-5.72l.13.13a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.56-.56a4.3 4.3 0 0 0 .52-1.35h.8a1 1 0 0 0 0-2m-3.34 2.65a2.3 2.3 0 0 1-.6.41A4.2 4.2 0 0 0 16 10a6.1 6.1 0 0 0-2.09-2.49 2.4 2.4 0 0 1 .46-.7 2.43 2.43 0 0 1 3.3 0 2.37 2.37 0 0 1 0 3.3Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgThunderstormSun);
export default ForwardRef;
