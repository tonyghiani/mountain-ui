import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgListUiAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.5 6a1 1 0 101 1 1 1 0 00-1-1zm4 2h14a1 1 0 000-2h-14a1 1 0 000 2zm0 3a1 1 0 101 1 1 1 0 00-1-1zm4 5a1 1 0 101 1 1 1 0 00-1-1zm10-5h-10a1 1 0 000 2h10a1 1 0 000-2zm0 5h-6a1 1 0 000 2h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgListUiAlt);
export default ForwardRef;
