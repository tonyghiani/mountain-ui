import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgHorizontalAlignLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 10h-5V7a1 1 0 00-1-1H4V3a1 1 0 00-2 0v18a1 1 0 002 0v-3h17a1 1 0 001-1v-6a1 1 0 00-1-1zM4 8h10v2H4zm16 8H4v-4h16z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHorizontalAlignLeft);
export default ForwardRef;
