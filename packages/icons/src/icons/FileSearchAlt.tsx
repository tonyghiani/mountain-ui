import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileSearchAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M12 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0 .9.9 0 0 0-.33-.11H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2m0-14.59L14.59 8H13a1 1 0 0 1-1-1ZM7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm14.71 12.29-1.17-1.16A3.44 3.44 0 0 0 20 15a3.49 3.49 0 0 0-6 2.49 3.46 3.46 0 0 0 5.13 3.05l1.16 1.17a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42m-3.17-1.75a1.54 1.54 0 0 1-2.11 0 1.5 1.5 0 0 1-.43-1.05 1.46 1.46 0 0 1 .44-1.06 1.48 1.48 0 0 1 1-.43A1.47 1.47 0 0 1 19 17.49a1.5 1.5 0 0 1-.46 1.05M13 12H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-2 6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Z' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileSearchAlt);
export default ForwardRef;
