import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgEllipsisV(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 7a2 2 0 10-2-2 2 2 0 002 2zm0 10a2 2 0 102 2 2 2 0 00-2-2zm0-7a2 2 0 102 2 2 2 0 00-2-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEllipsisV);
export default ForwardRef;
