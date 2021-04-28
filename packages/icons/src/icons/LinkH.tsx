import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgLinkH(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8 12a1 1 0 001 1h6a1 1 0 000-2H9a1 1 0 00-1 1zm2 3H7a3 3 0 010-6h3a1 1 0 000-2H7a5 5 0 000 10h3a1 1 0 000-2zm7-8h-3a1 1 0 000 2h3a3 3 0 010 6h-3a1 1 0 000 2h3a5 5 0 000-10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgLinkH);
export default ForwardRef;
