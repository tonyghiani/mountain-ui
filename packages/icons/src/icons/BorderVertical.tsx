import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBorderVertical(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M3 3a1 1 0 101 1 1 1 0 00-1-1zm0 4a1 1 0 101 1 1 1 0 00-1-1zm16-2a1 1 0 10-1-1 1 1 0 001 1zM7 11a1 1 0 101 1 1 1 0 00-1-1zm0 8a1 1 0 101 1 1 1 0 00-1-1zM7 3a1 1 0 101 1 1 1 0 00-1-1zM3 15a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1zm0 8a1 1 0 101 1 1 1 0 00-1-1zm16-4a1 1 0 101 1 1 1 0 00-1-1zm0-4a1 1 0 101 1 1 1 0 00-1-1zm0 8a1 1 0 101 1 1 1 0 00-1-1zm0-12a1 1 0 101 1 1 1 0 00-1-1zm-4-4a1 1 0 101 1 1 1 0 00-1-1zm-4 0a1 1 0 00-1 1v16a1 1 0 002 0V4a1 1 0 00-1-1zm4 16a1 1 0 101 1 1 1 0 00-1-1zm0-8a1 1 0 101 1 1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBorderVertical);
export default ForwardRef;
