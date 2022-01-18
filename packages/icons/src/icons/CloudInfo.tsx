import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudInfo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 12.29A1 1 0 0012 14h.19a.6.6 0 00.19-.06.56.56 0 00.17-.09l.15-.12a1 1 0 000-1.42 1 1 0 00-1.41-.02zM12 15a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm6.42-6.78a7 7 0 00-13.36 1.89A4 4 0 006 18h2a1 1 0 000-2H6a2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 13a3 3 0 01-3 3h-1a1 1 0 000 2h1a5 5 0 001.42-9.78z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudInfo);
export default ForwardRef;
