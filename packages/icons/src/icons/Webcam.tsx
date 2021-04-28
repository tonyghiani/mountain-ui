import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgWebcam(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12 13a3 3 0 10-3-3 3 3 0 003 3zm0-4a1 1 0 11-1 1 1 1 0 011-1zm9.59 9.16A10 10 0 0019 13.89a8 8 0 10-14 0 9.9 9.9 0 00-2.6 4.27 3 3 0 00.47 2.63A3 3 0 005.3 22h13.4a3 3 0 002.42-1.21 3 3 0 00.47-2.63zM12 4a6 6 0 11-6 6 6 6 0 016-6zm7.52 15.59a1 1 0 01-.82.41H5.3a1 1 0 01-.82-.41 1 1 0 01-.15-.87 7.85 7.85 0 011.88-3.22 8 8 0 0011.58 0 7.85 7.85 0 011.88 3.22 1 1 0 01-.15.87z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgWebcam);
export default ForwardRef;
