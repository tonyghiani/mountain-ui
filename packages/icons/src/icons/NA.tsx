import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgNA(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6h-1a3 3 0 00-3 3v8a1 1 0 002 0v-4h3v4a1 1 0 002 0V9a3 3 0 00-3-3zm1 5h-3V9a1 1 0 011-1h1a1 1 0 011 1zM8 6a1 1 0 00-1 1v5.76L3.89 6.55A1 1 0 002 7v10a1 1 0 002 0v-5.76l3.11 6.21A1 1 0 008 18a.91.91 0 00.23 0A1 1 0 009 17V7a1 1 0 00-1-1zm4-2a1 1 0 00-1 1v14a1 1 0 002 0V5a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNA);
export default ForwardRef;
