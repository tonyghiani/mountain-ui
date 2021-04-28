import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCoffee(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M9 17h4a5 5 0 005-5v-1h1a3 3 0 000-6h-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v8a5 5 0 005 5zm9-10h1a1 1 0 010 2h-1zM6 5h10v7a3 3 0 01-3 3H9a3 3 0 01-3-3zm15 14H3a1 1 0 000 2h18a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCoffee);
export default ForwardRef;
