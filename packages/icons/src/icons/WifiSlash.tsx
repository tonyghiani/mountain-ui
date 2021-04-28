import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWifiSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M6.92 5.51L3.71 2.29a1 1 0 00-1.42 1.42L4.56 6A15.21 15.21 0 001.4 8.39a1 1 0 000 1.41 1 1 0 00.71.3 1 1 0 00.7-.29 13.07 13.07 0 013.24-2.35L7.54 9a10.78 10.78 0 00-3.32 2.27 1 1 0 101.42 1.4 8.8 8.8 0 013.45-2.12l1.62 1.61a7.07 7.07 0 00-3.66 1.94 1 1 0 101.42 1.4A5 5 0 0112 14a4.13 4.13 0 01.63.05l7.66 7.66a1 1 0 001.42 0 1 1 0 000-1.42zM12 16a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM22.61 8.39A15 15 0 0010.29 4.1a1 1 0 10.22 2A13.07 13.07 0 0121.2 9.81a1 1 0 001.41-1.42zm-4.25 4.24a1 1 0 001.42-1.4 10.75 10.75 0 00-4.84-2.82 1 1 0 10-.52 1.92 8.94 8.94 0 013.94 2.3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWifiSlash);
export default ForwardRef;
