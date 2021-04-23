import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgFileHeart(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 8.94a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.1a1.1 1.1 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3zm-6-7.66A2.92 2.92 0 008.57 16l2.72 2.72a1 1 0 001.42 0L15.43 16A2.92 2.92 0 0012 11.34zm2 1.93a.92.92 0 010 1.3l-2 2-2-2a.92.92 0 010-1.3.92.92 0 011.3 0 1 1 0 001.42 0 .92.92 0 011.28 0z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgFileHeart);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;