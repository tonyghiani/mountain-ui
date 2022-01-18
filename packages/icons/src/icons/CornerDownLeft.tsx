import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCornerDownLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.69 2a1 1 0 00-1 1v10.37a2 2 0 01-2 2h-8l2.92-2.92A1 1 0 009.24 11l-4.63 4.66a1.19 1.19 0 00-.22.33 1 1 0 000 .76 1 1 0 00.22.33l4.63 4.63a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.42l-2.92-2.92h8a4 4 0 004-4V3a1 1 0 00-1.04-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCornerDownLeft);
export default ForwardRef;
