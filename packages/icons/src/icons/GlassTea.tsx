import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgGlassTea = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19 3a3 3 0 0 0-2.23-1H7.23a3 3 0 0 0-3 3.33l1.56 14a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67l1.56-14A3 3 0 0 0 19 3m-2.8 16.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44ZM17.44 8H6.56l-.32-2.89a1 1 0 0 1 .25-.78A1 1 0 0 1 7.23 4h9.54a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78ZM14 18a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgGlassTea);
export default ForwardRef;
