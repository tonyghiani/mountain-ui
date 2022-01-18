import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgTopArrowToTop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.71 6.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-4 4a1 1 0 101.42 1.42L11 9.41V21a1 1 0 002 0V9.41l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42zM19 2H5a1 1 0 000 2h14a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTopArrowToTop);
export default ForwardRef;
