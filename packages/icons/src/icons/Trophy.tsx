import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTrophy(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21 4h-3V3a1 1 0 00-1-1H7a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3a4 4 0 004 4h1.54A6 6 0 0011 13.91V16h-1a3 3 0 00-3 3v2a1 1 0 001 1h8a1 1 0 001-1v-2a3 3 0 00-3-3h-1v-2.09A6 6 0 0016.46 12H18a4 4 0 004-4V5a1 1 0 00-1-1zM6 10a2 2 0 01-2-2V6h2v2a6 6 0 00.35 2zm8 8a1 1 0 011 1v1H9v-1a1 1 0 011-1zm2-10a4 4 0 01-8 0V4h8zm4 0a2 2 0 01-2 2h-.35A6 6 0 0018 8V6h2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTrophy);
export default ForwardRef;
