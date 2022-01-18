import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLabel(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 11.29l-5-5A1 1 0 0016 6H5a3 3 0 00-3 3v6a3 3 0 003 3h11a1 1 0 00.71-.29l5-5a1 1 0 000-1.42zM15.59 16H5a1 1 0 01-1-1V9a1 1 0 011-1h10.59l4 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLabel);
export default ForwardRef;
