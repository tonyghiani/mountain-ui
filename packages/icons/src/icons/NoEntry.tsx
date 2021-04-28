import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgNoEntry(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 20h-1.24L15.37 4.2A3 3 0 0012.48 2h-1a3 3 0 00-2.85 2.2L4.24 20H3a1 1 0 000 2h18a1 1 0 000-2zM10.56 4.73a1 1 0 011-.73h1a1 1 0 011 .73L14.35 8h-4.7zM9.09 10h5.82L16 14H8zM6.32 20l1.11-4h9.14l1.11 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgNoEntry);
export default ForwardRef;
