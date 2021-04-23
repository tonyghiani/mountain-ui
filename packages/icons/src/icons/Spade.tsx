import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSpade(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M21.06 12.28a5.69 5.69 0 00-1.67-4L14 2.81a2.83 2.83 0 00-4 0L4.61 8.23a5.69 5.69 0 00-1.67 4A5.7 5.7 0 008.66 18a6.88 6.88 0 01-1.23 2.37A1 1 0 008.24 22h7.52a1 1 0 00.78-1.63A6.84 6.84 0 0115.31 18a5.69 5.69 0 005.75-5.71zM18 14.91a3.78 3.78 0 01-3.66.95 1 1 0 00-.17 0h-.2a1.41 1.41 0 00-.22.06h-.15a.69.69 0 00-.13.11.75.75 0 00-.17.14.6.6 0 01-.06.11 2.53 2.53 0 00-.12.23 1.1 1.1 0 000 .18v.18a8.84 8.84 0 00.82 3.13h-3.88a8.62 8.62 0 00.88-3v-.19a1.1 1.1 0 000-.18 1.12 1.12 0 00-.13-.24.53.53 0 00-.06-.1.54.54 0 00-.16-.14 1.27 1.27 0 00-.13-.11h-.14a.88.88 0 00-.23-.07H9.9a1.1 1.1 0 00-.18 0A3.81 3.81 0 016 14.91a3.75 3.75 0 01-1.09-2.63A3.69 3.69 0 016 9.65l5.4-5.42a.81.81 0 011.13 0L18 9.65a3.69 3.69 0 011.09 2.63A3.78 3.78 0 0118 14.91z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSpade);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;