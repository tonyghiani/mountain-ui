import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBed(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 12.5a3 3 0 10-3-3 3 3 0 003 3zm0-4a1 1 0 11-1 1 1 1 0 011-1zm13-2h-8a1 1 0 00-1 1v6H3v-8a1 1 0 00-2 0v13a1 1 0 002 0v-3h18v3a1 1 0 002 0v-9a3 3 0 00-3-3zm1 7h-8v-5h7a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBed);
export default ForwardRef;
