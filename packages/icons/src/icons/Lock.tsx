import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M17 9V7A5 5 0 007 7v2a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zM9 7a3 3 0 016 0v2H9zm9 12a1 1 0 01-1 1H7a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLock);
export default ForwardRef;
