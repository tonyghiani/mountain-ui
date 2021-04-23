import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVolumeMute(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zM19.91 12l1.8-1.79a1 1 0 00-1.42-1.42l-1.79 1.8-1.79-1.8a1 1 0 00-1.42 1.42l1.8 1.79-1.8 1.79a1 1 0 000 1.42 1 1 0 001.42 0l1.79-1.8 1.79 1.8a1 1 0 001.42 0 1 1 0 000-1.42z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeMute);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;