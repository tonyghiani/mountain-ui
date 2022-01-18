import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgMinusSquareFull(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 13h6a1 1 0 000-2H9a1 1 0 000 2zM21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMinusSquareFull);
export default ForwardRef;
