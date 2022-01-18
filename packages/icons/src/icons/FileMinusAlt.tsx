import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgFileMinusAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M8 8a1 1 0 000 2h1a1 1 0 000-2zm5 12H6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v5a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.29.29 0 00-.1 0 1.1 1.1 0 00-.31-.11H6a3 3 0 00-3 3v14a3 3 0 003 3h7a1 1 0 000-2zm0-14.59L15.59 8H14a1 1 0 01-1-1zM20 18h-4a1 1 0 000 2h4a1 1 0 000-2zm-7-2H8a1 1 0 000 2h5a1 1 0 000-2zm1-4H8a1 1 0 000 2h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileMinusAlt);
export default ForwardRef;
