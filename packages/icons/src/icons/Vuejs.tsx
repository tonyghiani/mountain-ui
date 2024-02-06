import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgVuejs = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18.03 2.443h-3.643L12.013 6.4 9.63 2.444l-2.646-.001H.831L12.03 21.558 23.168 2.443Zm-6.005 15.15L4.322 4.443h2.824l4.885 8.406 4.847-8.407h2.81Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgVuejs);
export default ForwardRef;
