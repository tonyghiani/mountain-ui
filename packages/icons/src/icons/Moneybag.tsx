import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgMoneybag(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 11a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm7-9h-3V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zM4 9a1 1 0 011-1h1a2 2 0 01-2 2zm1 11a1 1 0 01-1-1v-1a2 2 0 012 2zm15-1a1 1 0 01-1 1h-1a2 2 0 012-2zm0-3a4 4 0 00-4 4H8a4 4 0 00-4-4v-4a4 4 0 004-4h8a4 4 0 004 4zm0-6a2 2 0 01-2-2h1a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMoneybag);
export default ForwardRef;
