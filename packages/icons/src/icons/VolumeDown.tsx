import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVolumeDown(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.83 9.17a1 1 0 10-1.42 1.42A2 2 0 0118 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0020 12a4.06 4.06 0 00-1.17-2.83zm-4.4-5.07a1 1 0 00-1 .12L8.65 8H5a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0014 20a.91.91 0 00.43-.1A1 1 0 0015 19V5a1 1 0 00-.57-.9zM13 16.92l-3.38-2.7A1 1 0 009 14H6v-4h3a1 1 0 00.62-.22L13 7.08z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;