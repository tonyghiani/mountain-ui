import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLaptop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 14h-1V7a3 3 0 00-3-3H7a3 3 0 00-3 3v7H3a1 1 0 00-1 1v2a3 3 0 003 3h14a3 3 0 003-3v-2a1 1 0 00-1-1zM6 7a1 1 0 011-1h10a1 1 0 011 1v7H6zm14 10a1 1 0 01-1 1H5a1 1 0 01-1-1v-1h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLaptop);
export default ForwardRef;
