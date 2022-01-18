import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgMicrosoft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2 22h9.5v-9.5H2V22zm0-10.5h9.5V2H2v9.5zM12.5 2v9.5H22V2h-9.5zm0 20H22v-9.5h-9.5V22z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMicrosoft);
export default ForwardRef;
