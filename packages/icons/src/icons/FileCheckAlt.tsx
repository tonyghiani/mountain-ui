import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgFileCheckAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.5 20h-6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v5a1 1 0 002 0V9v-.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19.29.29 0 00-.1 0 1.1 1.1 0 00-.31-.11H5.5a3 3 0 00-3 3v14a3 3 0 003 3h6a1 1 0 000-2zm1-14.59L15.09 8H13.5a1 1 0 01-1-1zM7.5 14h6a1 1 0 000-2h-6a1 1 0 000 2zm4 2h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-6h1a1 1 0 000-2h-1a1 1 0 000 2zm13.71 6.29a1 1 0 00-1.42 0l-3.29 3.3-1.29-1.3a1 1 0 00-1.42 1.42l2 2a1 1 0 001.42 0l4-4a1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileCheckAlt);
export default ForwardRef;
