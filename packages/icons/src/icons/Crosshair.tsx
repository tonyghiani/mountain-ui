import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgCrosshair(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 11h-1.07A8 8 0 0013 4.07V3a1 1 0 00-2 0v1.07A8 8 0 004.07 11H3a1 1 0 000 2h1.07A8 8 0 0011 19.93V21a1 1 0 002 0v-1.07A8 8 0 0019.93 13H21a1 1 0 000-2zm-4 2h.91A6 6 0 0113 17.91V17a1 1 0 00-2 0v.91A6 6 0 016.09 13H7a1 1 0 000-2h-.91A6 6 0 0111 6.09V7a1 1 0 002 0v-.91A6 6 0 0117.91 11H17a1 1 0 000 2zm-5-2a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCrosshair);
export default ForwardRef;
