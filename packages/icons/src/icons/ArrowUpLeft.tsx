import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgArrowUpLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.41 8H17a1 1 0 000-2H7a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 006 7v10a1 1 0 002 0V9.41l8.29 8.3a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUpLeft);
export default ForwardRef;
