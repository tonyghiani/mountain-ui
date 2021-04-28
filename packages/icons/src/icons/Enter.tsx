import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnter(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 6a1 1 0 00-1 1v4a1 1 0 01-1 1H7.41l1.3-1.29a1 1 0 00-1.42-1.42l-3 3a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a1 1 0 001.42 0 1 1 0 000-1.42L7.41 14H17a3 3 0 003-3V7a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnter);
export default ForwardRef;
