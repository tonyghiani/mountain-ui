import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgWindowSection(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM8 20H4V10h4zm6 0h-4V10h4zm6 0h-4V10h4zm0-12H4V4h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWindowSection);
export default ForwardRef;
