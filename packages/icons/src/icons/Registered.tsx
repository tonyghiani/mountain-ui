import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgRegistered(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm.5-13h-3a1 1 0 00-1 1v8a1 1 0 002 0v-2h2a1 1 0 011 1v1a1 1 0 002 0v-1a3 3 0 00-.78-2 3 3 0 00.78-2v-1a3 3 0 00-3-3zm1 4a1 1 0 01-1 1h-2V9h2a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRegistered);
export default ForwardRef;
