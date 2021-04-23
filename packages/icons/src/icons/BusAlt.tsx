import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBusAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M18.5 2h-12a3 3 0 00-3 3v12a3 3 0 002 2.82V21a1 1 0 002 0v-1h10v1a1 1 0 002 0v-1.18a3 3 0 002-2.82V5a3 3 0 00-3-3zm-13 6h6v4h-6zm14 9a1 1 0 01-1 1h-12a1 1 0 01-1-1v-3h14zm0-5h-6V8h6zm0-6h-14V5a1 1 0 011-1h12a1 1 0 011 1zm-3.38 10.92a1 1 0 00.38.08 1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18 1.58 1.58 0 00-.12-.15l-.15-.12a.76.76 0 00-.18-.09.64.64 0 00-.2-.08 1 1 0 00-.91.27 1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 00.29.7 1 1 0 00.31.24zm-8 0a1 1 0 00.38.08 1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18 1.58 1.58 0 00-.12-.15l-.15-.12-.18-.09-.2-.08a1 1 0 00-.91.27 1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 00.29.7 1 1 0 00.31.24z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBusAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;