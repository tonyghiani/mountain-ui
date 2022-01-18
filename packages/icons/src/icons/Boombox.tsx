import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBoombox(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1zm-3.62-8.2A3 3 0 0015 9a3 3 0 00-6 0 3 3 0 00.62 1.8 4 4 0 104.76 0zM12 8a1 1 0 11-1 1 1 1 0 011-1zm0 8a2 2 0 112-2 2 2 0 01-2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBoombox);
export default ForwardRef;
