import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgKeyholeSquare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1zM12 8a2 2 0 00-2 2 2 2 0 001 1.72V15a1 1 0 002 0v-3.28A2 2 0 0014 10a2 2 0 00-2-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeyholeSquare);
export default ForwardRef;
