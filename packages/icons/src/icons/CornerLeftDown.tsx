import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCornerLeftDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 4.31h-9.37a5 5 0 00-5 5v7l-2.92-2.96a1 1 0 00-1.42 0 1 1 0 000 1.41l4.63 4.63a1 1 0 00.33.22.94.94 0 00.76 0 1.19 1.19 0 00.33-.22L13 14.76a1 1 0 00-1.41-1.41l-2.96 2.92v-7a3 3 0 013-3H21a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerLeftDown);
export default ForwardRef;
