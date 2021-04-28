import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgGlass(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19.75 2.33A1 1 0 0019 2H5a1 1 0 00-.75.33 1 1 0 00-.25.78l1.8 16.22a3 3 0 003 2.67h6.42a3 3 0 003-2.67L20 3.11a1 1 0 00-.25-.78zM16.2 19.11a1 1 0 01-1 .89H8.79a1 1 0 01-1-.89L6.78 10h10.44zM17.44 8H6.56l-.44-4h11.76z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgGlass);
export default ForwardRef;
