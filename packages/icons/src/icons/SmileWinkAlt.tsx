import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgSmileWinkAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 11a1 1 0 10-1-1 1 1 0 001 1zm5.36 3.23a3.76 3.76 0 01-4.72 0 1 1 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1 1 0 10-1.28-1.54zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm5.62-10.87a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1 1 0 011.42 0 1 1 0 001.41 0 1 1 0 000-1.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSmileWinkAlt);
export default ForwardRef;
