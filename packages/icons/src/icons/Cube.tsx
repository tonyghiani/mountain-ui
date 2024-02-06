import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCube = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20.47 7.37v-.08l-.06-.15a1 1 0 0 0-.07-.09 1 1 0 0 0-.09-.12l-.09-.07-.16-.08-7.5-4.63a1 1 0 0 0-1.06 0L4 6.78l-.09.08-.09.07a1 1 0 0 0-.09.12 1 1 0 0 0-.07.09l-.06.15v.08a1.2 1.2 0 0 0 0 .26v8.74a1 1 0 0 0 .47.85l7.5 4.63a.5.5 0 0 0 .15.06s.05 0 .08 0a.86.86 0 0 0 .52 0h.08a.5.5 0 0 0 .15-.06L20 17.22a1 1 0 0 0 .47-.85V7.63a1.2 1.2 0 0 0 0-.26M11 19.21l-5.5-3.4V9.43l5.5 3.39Zm1-8.12L6.4 7.63 12 4.18l5.6 3.45Zm6.5 4.72-5.5 3.4v-6.39l5.5-3.39Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCube);
export default ForwardRef;
