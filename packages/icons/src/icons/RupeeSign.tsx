import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgRupeeSign(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18 7h-2.21a5.49 5.49 0 00-1-2H18a1 1 0 000-2H7a1 1 0 000 2h3.5a3.5 3.5 0 013.15 2H7a1 1 0 000 2h7a3.5 3.5 0 01-3.45 3H7a.7.7 0 00-.14 0 .65.65 0 00-.2 0 .69.69 0 00-.19.1l-.12.07a.75.75 0 00-.14.17 1.1 1.1 0 00-.09.14.61.61 0 000 .18A.65.65 0 006 13a.7.7 0 000 .14.65.65 0 000 .2.69.69 0 00.1.19s0 .08.07.12l6 7a1 1 0 001.52-1.3L9.18 14h1.32A5.5 5.5 0 0016 9h2a1 1 0 000-2z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgRupeeSign);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;