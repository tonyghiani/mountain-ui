import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.71 16.29l-13-13a1 1 0 00-1.42 1.42l3.36 3.35a7 7 0 00-.59 2A4 4 0 006 18h9.59l2.7 2.71a1 1 0 001.42 0 1 1 0 000-1.42zM6 16a2 2 0 010-4 1 1 0 001-1 5 5 0 01.2-1.39L13.59 16zm12.42-7.78A7 7 0 0012 4a6.74 6.74 0 00-2.32.4 1 1 0 00.66 1.88A4.91 4.91 0 0112 6a5 5 0 014.73 3.39 1 1 0 00.78.67 3 3 0 011.85 4.79 1 1 0 00.16 1.4 1 1 0 00.62.22 1 1 0 00.78-.38 5 5 0 00-2.5-7.87z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudSlash);
export default ForwardRef;
