import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgRocket = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M22.601 2.062a1 1 0 0 0-.713-.713A11.25 11.25 0 0 0 10.47 4.972L9.354 6.296 6.75 5.668a2.78 2.78 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a13.4 13.4 0 0 0-.555 2.434 1 1 0 0 0 .284.836l3.1 3.1a1 1 0 0 0 .708.293q.042 0 .086-.004a12 12 0 0 0 2.492-.49l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304l-.668-2.76 1.237-1.137A11.2 11.2 0 0 0 22.6 2.062M3.572 10.723l1.556-2.76a.826.826 0 0 1 1.07-.375l1.718.416-.65.772a13 13 0 0 0-1.59 2.398Zm12.47 8.222-2.715 1.532-.43-2.005a11.3 11.3 0 0 0 2.414-1.62l.743-.683.404 1.664a1.04 1.04 0 0 1-.416 1.112m1.615-6.965-3.685 3.386a9.77 9.77 0 0 1-5.17 2.304l-2.405-2.404a10.93 10.93 0 0 1 2.401-5.206l1.679-1.993a1 1 0 0 0 .078-.092L11.99 6.27a9.28 9.28 0 0 1 8.81-3.12 9.22 9.22 0 0 1-3.143 8.829m-.923-6.164a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgRocket);
export default ForwardRef;
