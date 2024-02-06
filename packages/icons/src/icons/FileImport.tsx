import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileImport = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1.3 1.3 0 0 0-.19-.29l-6-6a1.3 1.3 0 0 0-.29-.19.3.3 0 0 0-.09 0l-.31-.1H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2m2-14.59L15.59 8H14a1 1 0 0 1-1-1ZM19 15h-5.59l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1.2 1.2 0 0 0-.21.33 1 1 0 0 0 0 .76.9.9 0 0 0 .21.33l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 17H19a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileImport);
export default ForwardRef;
