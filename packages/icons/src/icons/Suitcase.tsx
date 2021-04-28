import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSuitcase(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6.5h-3v-1a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm-9-1a1 1 0 011-1h2a1 1 0 011 1v1h-4zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.05h3v1.05a1 1 0 002 0v-1.05h6v1.05a1 1 0 002 0v-1.05h3zm0-7H4v-2a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSuitcase);
export default ForwardRef;
