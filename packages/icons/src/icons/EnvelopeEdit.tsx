import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgEnvelopeEdit(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M14 11.51h2.42a1 1 0 00.71-.29l4.58-4.58a1 1 0 000-1.42L19.29 2.8a1 1 0 00-1.42 0l-4.58 4.58a1.05 1.05 0 00-.29.71v2.42a1 1 0 001 1zm1-3l3.58-3.58 1 1L16 9.51h-1zm6 2a1 1 0 00-1 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8.9l5.88 5.89a3 3 0 004.27 0 1 1 0 000-1.4 1 1 0 00-1.43 0 1 1 0 01-1.4 0l-5.91-5.9H10a1 1 0 000-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-7a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeEdit);
export default ForwardRef;
