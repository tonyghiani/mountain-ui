import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVolumeOff(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.93 4.1a1 1 0 00-1 .12L11.15 8H7.5a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78a1 1 0 00.62.22.91.91 0 00.43-.1 1 1 0 00.57-.9V5a1 1 0 00-.57-.9zM15.5 16.92l-3.38-2.7a1 1 0 00-.62-.22h-3v-4h3a1 1 0 00.62-.22l3.38-2.7z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeOff);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
