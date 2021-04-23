import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgPrintSlash(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M7 10a1 1 0 101 1 1 1 0 00-1-1zM3.71 2.29a1 1 0 00-1.42 1.42L4.62 6A3 3 0 002 9v6a3 3 0 003 3h1v3a1 1 0 001 1h10a1 1 0 001-1v-1.59l2.29 2.3a1 1 0 001.42 0 1 1 0 000-1.42zM6 15v1H5a1 1 0 01-1-1V9a1 1 0 011-1h1.59l6 6H7a1 1 0 00-1 1zm10 5H8v-4h6.59L16 17.41zm3-14h-1V3a1 1 0 00-1-1H8.66a1 1 0 000 2H16v2h-3.34a1 1 0 000 2H19a1 1 0 011 1v6a.37.37 0 010 .11 1 1 0 00.78 1.18h.2a1 1 0 001-.8A2.84 2.84 0 0022 15V9a3 3 0 00-3-3z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgPrintSlash);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;