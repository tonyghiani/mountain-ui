import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgEqualCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15 13H9a1 1 0 000 2h6a1 1 0 000-2zm0-4H9a1 1 0 000 2h6a1 1 0 000-2zm-3-7a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEqualCircle);
export default ForwardRef;
