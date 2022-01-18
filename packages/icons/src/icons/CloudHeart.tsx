import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCloudHeart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.42 7.72A7 7 0 005.06 9.61a4 4 0 00-.38 7.66 1.13 1.13 0 00.32.05 1 1 0 00.32-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 12.5a5 5 0 00-3.58-4.78zM12 12.83a2.94 2.94 0 00-3.43.53 2.93 2.93 0 000 4.13l2.72 2.72a1 1 0 001.42 0l2.72-2.72a2.93 2.93 0 000-4.13 2.94 2.94 0 00-3.43-.53zm2 3.24l-2 2-2-2a.88.88 0 01-.27-.65.89.89 0 01.27-.65.92.92 0 011.3 0 1 1 0 001.42 0 .94.94 0 011.3 0 .89.89 0 01.27.65.88.88 0 01-.29.65z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudHeart);
export default ForwardRef;
