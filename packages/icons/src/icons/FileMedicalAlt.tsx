import * as React from 'react';
import { forwardRef,Ref } from 'react';

import { MntIcon, MntIconProps } from '../Icon';

const SvgFileMedicalAlt = (props: MntIconProps, ref: Ref<SVGSVGElement>) => (
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
      <path d='M18 18a1 1 0 0 0-1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27.3.3 0 0 0 0-.09 1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.3-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1M13 5.41 15.59 8H14a1 1 0 0 1-1-1ZM20 14h-2.5a1 1 0 0 0-.71.29l-1.24 1.25-2.8-3.2a1 1 0 0 0-1.46-.05L9.59 14H8a1 1 0 0 0 0 2h2a1 1 0 0 0 .71-.29L12 14.46l2.8 3.2a1 1 0 0 0 .72.34 1 1 0 0 0 .71-.29L17.91 16H20a1 1 0 0 0 0-2' />
    </svg>
  </MntIcon>
);
const ForwardRef = forwardRef(SvgFileMedicalAlt);
export default ForwardRef;
