import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgInfoCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.01 8.01 0 01-8 8zm0-8.5a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm0-4a1.25 1.25 0 101.25 1.25A1.25 1.25 0 0012 7.5z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgInfoCircle);
export default ForwardRef;
