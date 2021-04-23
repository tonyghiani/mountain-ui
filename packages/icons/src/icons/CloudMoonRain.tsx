import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgCloudMoonRain(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M8.5 14a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0 5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM21.7 7.07a1 1 0 00-.94-.26 3 3 0 01-.65.08 3 3 0 01-3-3 3.13 3.13 0 01.08-.66 1 1 0 00-.26-.93A1 1 0 0016 2a4.93 4.93 0 00-3.83 4.21A6.24 6.24 0 0010.5 6a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58 1.14 1.14 0 00.4.08 1 1 0 00.4-1.92A1.48 1.48 0 014 14.5 1.5 1.5 0 015.5 13a1 1 0 001-1 4 4 0 014-4 3.91 3.91 0 012.17.66 3.94 3.94 0 011.57 2 1 1 0 00.78.67 2.32 2.32 0 01.98 4.28 1 1 0 001.1 1.68 4.32 4.32 0 001.9-3.62 4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8a1 1 0 00-.3-.93zm-4.59 2.82a2.72 2.72 0 01-.42 0 4.6 4.6 0 00-.69-.35 6.06 6.06 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.05zM12.5 13a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0 5a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgCloudMoonRain);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;