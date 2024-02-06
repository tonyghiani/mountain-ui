import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileUploadAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M13 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v2a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0 .9.9 0 0 0-.33-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2m0-14.59L15.59 8H14a1 1 0 0 1-1-1ZM8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm6 4H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m6.71 5.29-2-2a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V21a1 1 0 0 0 2 0v-2.59l.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42M12 18a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileUploadAlt);
export default ForwardRef;
