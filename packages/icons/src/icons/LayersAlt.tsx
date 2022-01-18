import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLayersAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 2H9a1 1 0 00-1 1v4H6a1 1 0 00-1 1v4H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2h4a1 1 0 001-1v-2h4a1 1 0 001-1V3a1 1 0 00-1-1zM10 20H4v-6h6zm5-3h-3v-4a1 1 0 00-1-1H7V9h8zm5-3h-3V8a1 1 0 00-1-1h-6V4h10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLayersAlt);
export default ForwardRef;
