import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudWind(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M5 18a1 1 0 101 1 1 1 0 00-1-1zm14-4h-7a1 1 0 000 2h7a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6zm-5-3a1 1 0 001 1h4a3 3 0 003-3 1 1 0 00-2 0 1 1 0 01-1 1h-4a1 1 0 00-1 1zm-4 4a1 1 0 00-1-1H6a2 2 0 010-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 101.9-.64A7 7 0 005.06 8.11 4 4 0 006 16h3a1 1 0 001-1zm0-4a1 1 0 101-1 1 1 0 00-1 1zm4 7H9a1 1 0 000 2h5a1 1 0 011 1 1 1 0 002 0 3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudWind);
export default ForwardRef;
