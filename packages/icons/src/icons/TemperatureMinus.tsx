import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgTemperatureMinus(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 5.5a4.5 4.5 0 00-9 0V13a6 6 0 003.21 9.83 7 7 0 001.28.17A6 6 0 0014 13zm-2 14.61a4 4 0 01-5.32-6 1 1 0 00.3-.71V5.5a2.5 2.5 0 015 0v7.94a1 1 0 00.3.71 4 4 0 01-.28 6zm-1.5-4.83V5.5a1 1 0 00-2 0v9.78a2 2 0 00-1 1.72 2 2 0 004 0 2 2 0 00-1-1.72zm9-12.78h-3a1 1 0 000 2h3a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTemperatureMinus);
export default ForwardRef;
