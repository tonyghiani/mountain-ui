import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgTennisBall(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 2a10 10 0 00-7.35 16.76l.09.1a10 10 0 0014.52 0l.09-.1A10 10 0 0012 2zM5.61 16.79a7.93 7.93 0 010-9.58 6 6 0 010 9.58zM12 20a7.91 7.91 0 01-5-1.77A8 8 0 007 5.77a7.95 7.95 0 0110 0 8 8 0 000 12.46A7.91 7.91 0 0112 20zm6.39-3.21a6 6 0 010-9.58 7.93 7.93 0 010 9.58z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTennisBall);
export default ForwardRef;
