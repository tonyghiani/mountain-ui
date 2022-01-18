import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgTrafficBarrier(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 5h-1V4a1 1 0 00-2 0v1H6V4a1 1 0 00-2 0v1H3a1 1 0 00-1 1v6a1 1 0 001 1h1v7a1 1 0 002 0v-7h12v7a1 1 0 002 0v-7h1a1 1 0 001-1V6a1 1 0 00-1-1zM4 9.52V7h2.52zM5.34 11l4-4h3.33l-4 4zm6.15 0l4-4h3.18l-4 4zM20 11h-2.51L20 8.49z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTrafficBarrier);
export default ForwardRef;
