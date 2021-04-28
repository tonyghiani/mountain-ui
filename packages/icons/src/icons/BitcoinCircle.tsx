import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBitcoinCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 20a9 9 0 119-9 9 9 0 01-9 9zm2-14V6a1 1 0 00-2 0v1h-1V6a1 1 0 00-2 0v1H8a1 1 0 000 2h1v6H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1v1a1 1 0 002 0v-1a3 3 0 003-3 3 3 0 00-.77-2 3 3 0 00.77-2 3 3 0 00-3-3zm0 8h-3v-2h3a1 1 0 010 2zm0-4h-3V9h3a1 1 0 010 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBitcoinCircle);
export default ForwardRef;
