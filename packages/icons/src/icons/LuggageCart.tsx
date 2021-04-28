import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLuggageCart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M2 13.5v2a1 1 0 001 1h10a3 3 0 006 0h2a1 1 0 001-1v-8a3 3 0 00-3-3H9a3 3 0 00-3 3v7H4v-1a1 1 0 00-2 0zm13 3a1 1 0 111 1 1 1 0 01-1-1zm-7-6h12v4h-1.78a3 3 0 00-4.44 0H8zm0-3a1 1 0 011-1h10a1 1 0 011 1v1H8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLuggageCart);
export default ForwardRef;
