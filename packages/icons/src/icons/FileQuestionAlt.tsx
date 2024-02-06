import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileQuestionAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M13.07 12h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m1 8h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V9a.14.14 0 0 0 0-.06.9.9 0 0 0-.07-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.29-.19s-.05 0-.08 0a.9.9 0 0 0-.32-.11h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 0 0 0-2Zm-1-14.59L15.65 8h-1.58a1 1 0 0 1-1-1Zm5.57 14.88a2 2 0 0 0-.15-.12 1.1 1.1 0 0 0-.36-.15 1 1 0 0 0-.9.27 1 1 0 0 0 0 1.42 1 1 0 0 0 .7.29 1 1 0 0 0 .93-1.38 1.2 1.2 0 0 0-.22-.33M13.07 16h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m4.86-3a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.74 1 1 1 0 1 1 .86 1.5 1 1 0 0 0 0 2 3 3 0 0 0 0-6m-9.86-3h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileQuestionAlt);
export default ForwardRef;
