import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileInfoAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-6-6h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m6 2H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m4.71 3.29a1 1 0 0 0-.33-.21.92.92 0 0 0-.76 0 1 1 0 0 0-.33.21 1.2 1.2 0 0 0-.21.33 1 1 0 0 0 .21 1.09A1 1 0 0 0 19 17a1 1 0 0 0 .38-.08 1.2 1.2 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1.2 1.2 0 0 0-.21-.33M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0 .9.9 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 0 0 0-2H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94M15 8a1 1 0 0 1-1-1V5.41L16.59 8Zm4 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileInfoAlt);
export default ForwardRef;
