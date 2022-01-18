import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgUser(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M15.71 12.71a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1 1 0 002 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 10 10 0 00-6.25-8.19zM12 12a4 4 0 114-4 4 4 0 01-4 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgUser);
export default ForwardRef;
