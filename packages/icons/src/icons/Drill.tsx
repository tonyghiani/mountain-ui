import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgDrill(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 4H9a1 1 0 00-1 1v2H3a1 1 0 000 2h5v4a1 1 0 002 0v-1h4v7a1 1 0 001 1h2a3 3 0 003-3v-5.18A3 3 0 0022 9V7a3 3 0 00-3-3zm-1 13a1 1 0 01-1 1h-1v-6h2zm2-8a1 1 0 01-1 1h-9V6h6v1a1 1 0 002 0V6h1a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgDrill);
export default ForwardRef;
