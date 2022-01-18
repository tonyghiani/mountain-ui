import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgBusSchool(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M1 12.5v4a1 1 0 001 1h1a3 3 0 006 0h6a3 3 0 006 0h1a1 1 0 001-1v-10a3 3 0 00-3-3H8.44A3 3 0 005.6 5.55L4.16 9.86l-2.71 1.81a1 1 0 00-.45.83zm20-3h-2v-4h1a1 1 0 011 1zm-4 8a1 1 0 111 1 1 1 0 01-1-1zm-2-6h6v4h-.78a3 3 0 00-4.44 0H15zm0-6h2v4h-2zm-4 6h2v4h-2zm0-6h2v4h-2zm-2 4H6.39l1.1-3.32a1 1 0 01.95-.68H9zm-4 8a1 1 0 111 1 1 1 0 01-1-1zM3 13l2.3-1.5H9v4h-.78a3 3 0 00-4.44 0H3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBusSchool);
export default ForwardRef;
