import * as React from 'react';

import { Icon, IconPresetProps } from '../Icon';

function SvgSave(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M20.71 9.29l-6-6a1 1 0 00-.32-.21A1.09 1.09 0 0014 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-8a1 1 0 00-.29-.71zM9 5h4v2H9zm6 14H9v-3a1 1 0 011-1h4a1 1 0 011 1zm4-1a1 1 0 01-1 1h-1v-3a3 3 0 00-3-3h-4a3 3 0 00-3 3v3H6a1 1 0 01-1-1V6a1 1 0 011-1h1v3a1 1 0 001 1h6a1 1 0 001-1V6.41l4 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSave);
export default ForwardRef;
