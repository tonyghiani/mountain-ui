import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgArrowCircleLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.29 11.29a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a1 1 0 001.42-1.42L11.41 13H15a1 1 0 000-2h-3.59l1.3-1.29a1 1 0 000-1.42 1 1 0 00-1.42 0zM2 12A10 10 0 1012 2 10 10 0 002 12zm18 0a8 8 0 11-8-8 8 8 0 018 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowCircleLeft);
export default ForwardRef;
