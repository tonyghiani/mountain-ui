import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgCloudMoonMeatball = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M21.7 8a1 1 0 0 0-.94-.26 3 3 0 0 1-.65.08 3 3 0 0 1-3-3 3 3 0 0 1 .08-.66 1 1 0 0 0-.26-.94 1 1 0 0 0-.93-.28 5 5 0 0 0-3.83 4.22 5.9 5.9 0 0 0-1.67-.24A6 6 0 0 0 4.56 12 3.52 3.52 0 0 0 2 15.42a3.47 3.47 0 0 0 1.41 2.79 1 1 0 1 0 1.18-1.61A1.46 1.46 0 0 1 4 15.42a1.5 1.5 0 0 1 1.5-1.5 1 1 0 0 0 1-1 4 4 0 0 1 6.17-3.35 3.9 3.9 0 0 1 1.57 2 1 1 0 0 0 .78.66 2.33 2.33 0 0 1 .54 4.44 1 1 0 0 0-.52 1.32 1 1 0 0 0 .92.6 1 1 0 0 0 .4-.09 4.33 4.33 0 0 0 2.6-4 4.2 4.2 0 0 0-.49-2A4.94 4.94 0 0 0 22 8.92a1 1 0 0 0-.3-.92m-4.59 2.82a3 3 0 0 1-.42 0 4.6 4.6 0 0 0-.72-.31 5.9 5.9 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.22 3 3 0 0 1-2.32 1.01Zm-4.61 6.1h-.77l.39-.67a1 1 0 0 0-1.74-1l-.38.67-.38-.67a1 1 0 0 0-1.74 1l.39.67H7.5a1 1 0 0 0 0 2h.77l-.39.66a1 1 0 0 0 1.74 1l.38-.66.38.66a1 1 0 1 0 1.74-1l-.39-.66h.77a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgCloudMoonMeatball);
export default ForwardRef;
