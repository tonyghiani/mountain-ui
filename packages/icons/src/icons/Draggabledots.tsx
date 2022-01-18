import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgDraggabledots(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.5 10a2 2 0 102 2 2 2 0 00-2-2zm0 7a2 2 0 102 2 2 2 0 00-2-2zm7-10a2 2 0 10-2-2 2 2 0 002 2zm-7-4a2 2 0 102 2 2 2 0 00-2-2zm7 14a2 2 0 102 2 2 2 0 00-2-2zm0-7a2 2 0 102 2 2 2 0 00-2-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDraggabledots);
export default ForwardRef;
