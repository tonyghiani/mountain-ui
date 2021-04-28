import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSuitcaseAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6h-3V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-9-1h4v1h-4zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5h4v1a1 1 0 002 0v-1h4v1a1 1 0 002 0v-1h4zm0-7H4V9a1 1 0 011-1h14a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSuitcaseAlt);
export default ForwardRef;
