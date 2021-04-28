import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgExchange(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 10a1 1 0 00-1-1H5.41l2.3-2.29a1 1 0 00-1.42-1.42l-4 4a1 1 0 00-.21 1.09A1 1 0 003 11h14a1 1 0 001-1zm3.92 3.62A1 1 0 0021 13H7a1 1 0 000 2h11.59l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-1.09z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgExchange);
export default ForwardRef;
