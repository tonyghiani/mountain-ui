import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgDiamond(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 10.35l-5.78-7.41A3.06 3.06 0 009.75 3L4 10.35A3.05 3.05 0 003.51 12 3.09 3.09 0 004 13.58l.06.07 5.74 7.41A3 3 0 0012 22a3.06 3.06 0 002.26-1L20 13.65a3 3 0 00-.06-3.3zm-1.57 2.14l-5.67 7.22a1.11 1.11 0 01-1.42.07l-5.69-7.31a1 1 0 01-.14-.47 1.11 1.11 0 01.1-.45l5.67-7.22a1.11 1.11 0 011.42-.07l5.63 7.28a1 1 0 01.16.54 1.11 1.11 0 01-.1.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDiamond);
export default ForwardRef;
