import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudBlock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.42 7.72A7 7 0 005.06 9.61a4 4 0 00-.38 7.66 1.13 1.13 0 00.32.05 1 1 0 00.32-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 12.5a5 5 0 00-3.58-4.78zm-9.25 6a4 4 0 105.66 0 4.1 4.1 0 00-5.66-.05zM10 16.5a2 2 0 012-2 2.09 2.09 0 01.51.07L10.07 17a2.09 2.09 0 01-.07-.5zm3.41 1.41a2 2 0 01-1.91.5L13.93 16a2.09 2.09 0 01.07.51 2 2 0 01-.59 1.4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudBlock);
export default ForwardRef;
