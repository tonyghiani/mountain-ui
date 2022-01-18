import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgStoreAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 2H2a1 1 0 00-1 1v4a3 3 0 002 2.82V21a1 1 0 001 1h16a1 1 0 001-1V9.82A3 3 0 0023 7V3a1 1 0 00-1-1zm-7 2h2v3a1 1 0 01-2 0zm-4 0h2v3a1 1 0 01-2 0zM7 4h2v3a1 1 0 01-2 0zM4 8a1 1 0 01-1-1V4h2v3a1 1 0 01-1 1zm10 12h-4v-4a2 2 0 014 0zm5 0h-3v-4a4 4 0 00-8 0v4H5V9.82a3.17 3.17 0 001-.6 3 3 0 004 0 3 3 0 004 0 3 3 0 004 0 3.17 3.17 0 001 .6zm2-13a1 1 0 01-2 0V4h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStoreAlt);
export default ForwardRef;
