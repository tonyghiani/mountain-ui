import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgNerd(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.41 8.65v-.06a10 10 0 00-18.78-.06.85.85 0 00-.08.24A9.87 9.87 0 002 12a10 10 0 1019.41-3.35zM12 4a8 8 0 016.92 4h-1.2a3 3 0 00-4.62.22A3.17 3.17 0 0012 8a3.17 3.17 0 00-1.1.22A3 3 0 006.28 8h-1.2A8 8 0 0112 4zm4.5 6a1 1 0 11-1-1 1 1 0 011 1zm-7 0a1 1 0 11-1-1 1 1 0 011 1zM12 20a8 8 0 01-8-8 8.24 8.24 0 01.26-2H5.5a3 3 0 006 .18 1 1 0 011 0 3 3 0 006-.18h1.24a8.24 8.24 0 01.26 2 8 8 0 01-8 8zm2.36-5.77a3.76 3.76 0 01-4.72 0 1 1 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1 1 0 10-1.28-1.54z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNerd);
export default ForwardRef;
