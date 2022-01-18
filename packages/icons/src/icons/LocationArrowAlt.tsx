import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLocationArrowAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.68 17.65l-7-14a3 3 0 00-5.36 0l-7 14a3 3 0 003.9 4.08l5.37-2.4a1.06 1.06 0 01.82 0l5.37 2.4a3 3 0 003.9-4.08zm-2 2a1 1 0 01-1.13.22l-5.37-2.39a3 3 0 00-2.44 0L5.41 19.9a1 1 0 01-1.3-1.35l7-14a1 1 0 011.78 0l7 14a1 1 0 01-.17 1.13z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLocationArrowAlt);
export default ForwardRef;
