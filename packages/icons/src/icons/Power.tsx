import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgPower(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10.21 6.21l.79-.8V10a1 1 0 002 0V5.41l.79.8a1 1 0 001.42 0 1 1 0 000-1.42l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1 1 0 001.42 1.42zM18 7.56A1 1 0 1016.56 9a6.45 6.45 0 11-9.12 0A1 1 0 106 7.56a8.46 8.46 0 1012 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPower);
export default ForwardRef;
