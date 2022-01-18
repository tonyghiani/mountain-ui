import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBringFront(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 17.3L10 18.59V7a1 1 0 00-2 0v11.6l-1.29-1.3a1 1 0 00-1.42 0 1 1 0 000 1.41l3 3a1 1 0 001.42 0l3-3a1 1 0 000-1.41 1 1 0 00-1.42 0zM22 3a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 000-2H4V4h16v4h-7a1 1 0 000 2h1v5a1 1 0 001 1h6a1 1 0 001-1V9zm-2 11h-4v-4h4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBringFront);
export default ForwardRef;
