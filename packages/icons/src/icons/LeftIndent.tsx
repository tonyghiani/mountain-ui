import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLeftIndent(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 7h18a1 1 0 000-2H3a1 1 0 000 2zm0 4h10a1 1 0 000-2H3a1 1 0 000 2zm18.77-1.31a1 1 0 00-1.41-.12l-2 1.66a1 1 0 000 1.54l2 1.66a1 1 0 00.64.24 1 1 0 00.77-.36 1 1 0 00-.13-1.41l-1.08-.9 1.08-.9a1 1 0 00.13-1.41zM21 17H3a1 1 0 000 2h18a1 1 0 000-2zM3 15h10a1 1 0 000-2H3a1 1 0 000 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLeftIndent);
export default ForwardRef;
