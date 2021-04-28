import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTvRetro(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 6h-3.59l2.3-2.29a1 1 0 10-1.42-1.42L12 5.54l-1.17-2a1 1 0 10-1.74 1L10 6H6a3 3 0 00-3 3v8a3 3 0 003 3v1a1 1 0 002 0v-1h8v1a1 1 0 002 0v-1a3 3 0 003-3V9a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h12a1 1 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTvRetro);
export default ForwardRef;
