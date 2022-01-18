import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgWind(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3.5 9a1 1 0 10-1-1 1 1 0 001 1zm4 0h7a3 3 0 000-6 3.06 3.06 0 00-1.5.4 1 1 0 00-.37 1.37 1 1 0 001.37.36 1.09 1.09 0 01.5-.13 1 1 0 010 2h-7a1 1 0 000 2zm-4 4h7a1 1 0 000-2h-7a1 1 0 000 2zm17-4a1 1 0 10-1-1 1 1 0 001 1zm-2 2h-4a1 1 0 000 2h4a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6zm-6 4h-4a1 1 0 000 2h4a1 1 0 010 2 1.09 1.09 0 01-.5-.13 1 1 0 10-1 1.73 3.06 3.06 0 001.5.4 3 3 0 000-6zm-8 0h-1a1 1 0 000 2h1a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWind);
export default ForwardRef;
