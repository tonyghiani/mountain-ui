import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgArrowToBottom(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 20H5a1 1 0 000 2h14a1 1 0 000-2zm-7.71-2.29a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1 1 0 00-1.42-1.42L13 14.59V3a1 1 0 00-2 0v11.59l-2.29-2.3a1 1 0 10-1.42 1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgArrowToBottom);
export default ForwardRef;
