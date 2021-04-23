import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgVolumeUp(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm4.14-12.83a1 1 0 10-.28 2 6 6 0 010 11.86 1 1 0 00.14 2h.14a8 8 0 000-15.82zm-.46 9.78a1 1 0 00.32 2 1.13 1.13 0 00.32-.05 4 4 0 000-7.54 1 1 0 00-.64 1.9 2 2 0 010 3.74z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeUp);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;