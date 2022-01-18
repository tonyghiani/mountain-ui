import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgWatch(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 6.78V3a1 1 0 00-1-1H8a1 1 0 00-1 1v3.78A3 3 0 006 9v6a3 3 0 001 2.22V21a1 1 0 001 1h8a1 1 0 001-1v-3.78A3 3 0 0018 15V9a3 3 0 00-1-2.22zM9 4h6v2H9zm6 16H9v-2h6zm1-5a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1h6a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWatch);
export default ForwardRef;
