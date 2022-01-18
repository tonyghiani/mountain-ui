import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLocationPinAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 10.8a2 2 0 10-2-2 2 2 0 002 2zm-.71 6.91a1 1 0 001.42 0l4.09-4.1a6.79 6.79 0 10-9.6 0zM7.23 8.34a4.81 4.81 0 012.13-3.55 4.81 4.81 0 015.28 0 4.82 4.82 0 01.75 7.41L12 15.59 8.61 12.2a4.77 4.77 0 01-1.38-3.86zM19 20H5a1 1 0 000 2h14a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLocationPinAlt);
export default ForwardRef;
