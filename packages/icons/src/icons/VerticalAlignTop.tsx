import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgVerticalAlignTop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2H3a1 1 0 000 2h3v17a1 1 0 001 1h6a1 1 0 001-1v-5h3a1 1 0 001-1V4h3a1 1 0 000-2zm-9 18H8V4h4zm4-6h-2V4h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVerticalAlignTop);
export default ForwardRef;
