import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgArrowUp(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17.71 11.29l-5-5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-5 5a1 1 0 001.42 1.42L11 9.41V17a1 1 0 002 0V9.41l3.29 3.3a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowUp);
export default ForwardRef;
