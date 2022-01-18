import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgKeySkeletonAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.71 6.53l-1.42-1.41 1.42-1.41a1 1 0 10-1.42-1.42L9.75 12.83a5 5 0 101.42 1.42l4.88-4.89 1.41 1.42a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.42L17.46 8l1.42-1.42L20.29 8a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.47zM7 20a3 3 0 113-3 3 3 0 01-3 3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgKeySkeletonAlt);
export default ForwardRef;
