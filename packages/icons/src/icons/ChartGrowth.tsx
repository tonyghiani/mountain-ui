import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgChartGrowth(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 20h-1V5a1 1 0 00-2 0v15h-2V9a1 1 0 00-2 0v11h-2v-7a1 1 0 00-2 0v7H8v-3a1 1 0 00-2 0v3H4V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChartGrowth);
export default ForwardRef;
