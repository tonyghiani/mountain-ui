import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudLock(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 24 24'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        ref={svgRef}
      >
        <path d='M18.42 6.72A7 7 0 005.06 8.61a4 4 0 00-.38 7.66 1.13 1.13 0 00.32.05 1 1 0 00.32-2A2 2 0 014 12.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1 1 0 101 1.74A5 5 0 0022 11.5a5 5 0 00-3.58-4.78zm-3.42 9V14.5a3 3 0 00-6 0v1.18a3 3 0 001 5.82h4a3 3 0 001-5.82zm-4-1.22a1 1 0 012 0v1h-2zm3 5h-4a1 1 0 010-2h4a1 1 0 010 2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudLock);
export default ForwardRef;
