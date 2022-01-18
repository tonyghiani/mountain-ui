import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgMountains(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.85 17.47l-5-8a1 1 0 00-1.7 0l-1 1.63-3.29-5.6a1 1 0 00-1.72 0l-7 12A1 1 0 003 19h18a1 1 0 00.85-1.53zM10.45 17H4.74L10 8l2.93 5zm2.35 0l2.2-3.43 1-1.68L19.2 17z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgMountains);
export default ForwardRef;
