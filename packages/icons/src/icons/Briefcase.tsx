import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBriefcase(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 6h-4V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H3a1 1 0 00-1 1v4a3 3 0 001 2.22V19a3 3 0 003 3h12a3 3 0 003-3v-5.78A3 3 0 0022 11V7a1 1 0 00-1-1zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 14a1 1 0 01-1 1H6a1 1 0 01-1-1v-5h2v1a1 1 0 002 0v-1h6v1a1 1 0 002 0v-1h2zm1-8a1 1 0 01-1 1h-2v-1a1 1 0 00-2 0v1H9v-1a1 1 0 00-2 0v1H5a1 1 0 01-1-1V8h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBriefcase);
export default ForwardRef;
