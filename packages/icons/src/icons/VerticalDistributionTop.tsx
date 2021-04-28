import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVerticalDistributionTop(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 6h1v5a1 1 0 001 1h14a1 1 0 001-1V6h1a1 1 0 000-2H3a1 1 0 000 2zm3 0h12v4H6zm15 8H3a1 1 0 000 2h2v3a1 1 0 001 1h12a1 1 0 001-1v-3h2a1 1 0 000-2zm-4 4H7v-2h10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVerticalDistributionTop);
export default ForwardRef;
