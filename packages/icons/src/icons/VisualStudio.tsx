import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgVisualStudio(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.85 2L9.09 9.77l-4.9-3.86L2.05 7v10l2.15 1.09 4.93-3.85L16.87 22 22 19.93V4zM4.37 14.3V9.65l2.44 2.43zm12.33 1.29L12.05 12l4.65-3.59z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVisualStudio);
export default ForwardRef;
