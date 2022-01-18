import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgShuffle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 10a1 1 0 001-1V5.41L8.56 10A1 1 0 0010 10a1 1 0 000-1.41L5.41 4H9a1 1 0 000-2H3a1 1 0 00-.38.08 1 1 0 00-.54.54A1 1 0 002 3v6a1 1 0 001 1zm12.3 4a1 1 0 00-1.41 1.41l6.27 6.28a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42zM9 20H5.41l16.3-16.29a1 1 0 10-1.42-1.42L4 18.59V15a1 1 0 00-2 0v6a1 1 0 00.08.38 1 1 0 00.54.54A1 1 0 003 22h6a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgShuffle);
export default ForwardRef;
