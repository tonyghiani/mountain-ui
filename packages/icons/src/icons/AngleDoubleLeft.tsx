import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAngleDoubleLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.46 8.29a1 1 0 00-1.42 0l-3 3a1 1 0 000 1.42l3 3a1 1 0 001.42 0 1 1 0 000-1.42L9.16 12l2.3-2.29a1 1 0 000-1.42zm3.2 3.71L17 9.71a1 1 0 00-1.42-1.42l-3 3a1 1 0 000 1.42l3 3a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngleDoubleLeft);
export default ForwardRef;
