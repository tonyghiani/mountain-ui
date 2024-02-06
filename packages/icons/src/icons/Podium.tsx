import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgPodium = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M19.79 7.13a1 1 0 0 0-.79-.38H8v-.5a2 2 0 0 1 1.46-1.92 1.5 1.5 0 0 0 1 .42h1a1.5 1.5 0 0 0 0-3h-1a1.49 1.49 0 0 0-1.17.57A4 4 0 0 0 6 6.25v.5H5a1 1 0 0 0-.79.38A1 1 0 0 0 4 8l.62 2.49a3 3 0 0 0 2.48 2.22l.78 7H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-.88l.78-7a3 3 0 0 0 2.45-2.23L20 8a1 1 0 0 0-.21-.87M14.1 19.75H9.9l-.78-7h5.76ZM17.41 10a1 1 0 0 1-1 .76H7.56a1 1 0 0 1-1-.76l-.28-1.25h11.44Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgPodium);
export default ForwardRef;
