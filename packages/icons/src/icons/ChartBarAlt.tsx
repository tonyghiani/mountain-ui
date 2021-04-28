import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgChartBarAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 20H4v-2h3a1 1 0 000-2H4v-2h11a1 1 0 000-2H4v-2h7a1 1 0 000-2H4V6h15a1 1 0 000-2H4V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgChartBarAlt);
export default ForwardRef;
