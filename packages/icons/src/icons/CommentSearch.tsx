import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCommentSearch = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='m21.21 10.29-1.73-1.72a4.37 4.37 0 0 0 .65-2.26 4.31 4.31 0 1 0-4.32 4.32 4.35 4.35 0 0 0 2.26-.63l1.72 1.73a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.44M17.45 8a2.32 2.32 0 0 1-3.95-1.69 2.3 2.3 0 0 1 .68-1.63 2.32 2.32 0 0 1 3.27 0 2.31 2.31 0 0 1 0 3.27Zm2.05 6a1 1 0 0 0-1.22.72A7 7 0 0 1 11.5 20H5.91l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1-2-5 7 7 0 0 1 4.32-6.44 1 1 0 1 0-.74-1.86 9 9 0 0 0-3.66 14l-1.68 1.63a1 1 0 0 0-.21 1.09 1 1 0 0 0 .92.62h8a9 9 0 0 0 8.72-6.75A1 1 0 0 0 19.5 14' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCommentSearch);
export default ForwardRef;
