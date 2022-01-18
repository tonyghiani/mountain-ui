import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgAngleLeft(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M11.29 12l3.54-3.54a1 1 0 000-1.41 1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgAngleLeft);
export default ForwardRef;
