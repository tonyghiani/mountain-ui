import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCamera(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6.5h-1.28l-.32-1a3 3 0 00-2.84-2H9.44A3 3 0 006.6 5.55l-.32 1H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3.05zm1 11a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1h2a1 1 0 001-.68l.54-1.64a1 1 0 01.95-.68h5.12a1 1 0 01.95.68l.54 1.64a1 1 0 00.9.68h2a1 1 0 011 1zm-8-9a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCamera);
export default ForwardRef;
