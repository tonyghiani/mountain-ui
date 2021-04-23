import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgReceiptAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 8h6a1 1 0 000-2h-6a1 1 0 000 2zm-2 4h8a1 1 0 000-2H8a1 1 0 000 2zm0 4h8a1 1 0 000-2H8a1 1 0 000 2zM20 2H4a1 1 0 00-1 1v18a1 1 0 001.6.8l2.07-1.55 2.06 1.55a1 1 0 001.2 0L12 20.25l2.07 1.55a1 1 0 001.2 0l2.06-1.55 2.07 1.55a1 1 0 001.05.09A1 1 0 0021 21V3a1 1 0 00-1-1zm-1 17l-1.07-.8a1 1 0 00-1.2 0l-2.06 1.55-2.07-1.55a1 1 0 00-1.2 0l-2.07 1.55-2.06-1.55a1 1 0 00-1.2 0L5 19V4h14z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgReceiptAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;