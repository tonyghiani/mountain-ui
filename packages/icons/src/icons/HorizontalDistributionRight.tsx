import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgHorizontalDistributionRight(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 2a1 1 0 00-1 1v1h-5a1 1 0 00-1 1v14a1 1 0 001 1h5v1a1 1 0 002 0V3a1 1 0 00-1-1zm-1 16h-4V6h4zM9 2a1 1 0 00-1 1v2H5a1 1 0 00-1 1v12a1 1 0 001 1h3v2a1 1 0 002 0V3a1 1 0 00-1-1zM8 17H6V7h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgHorizontalDistributionRight);
export default ForwardRef;
