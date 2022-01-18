import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgGrinTongueWinkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9.21 10.54a1 1 0 001.41 0 1 1 0 000-1.41 3.08 3.08 0 00-4.24 0 1 1 0 101.41 1.41 1 1 0 011.42 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3-11a1 1 0 101 1 1 1 0 00-1-1zm0 4H9a1 1 0 000 2 3 3 0 006 0 1 1 0 000-2zm-3 3a1 1 0 01-1-1h2a1 1 0 01-1 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGrinTongueWinkAlt);
export default ForwardRef;
