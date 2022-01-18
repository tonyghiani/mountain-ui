import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudComputing(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 20h-3a1 1 0 01-1-1v-3a5 5 0 001.42-9.78A7 7 0 005.06 8.11 4 4 0 006 16h1v3a1 1 0 01-1 1H3a1 1 0 000 2h3a3 3 0 003-3v-3h2v5a1 1 0 002 0v-5h2v3a3 3 0 003 3h3a1 1 0 000-2zM6 14a2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 11a3 3 0 01-3 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudComputing);
export default ForwardRef;
