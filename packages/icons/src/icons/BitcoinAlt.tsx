import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBitcoinAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M16.304 11.241a3.998 3.998 0 00-3.312-6.239v-1a1 1 0 10-2 0v1h-2v-1a1 1 0 10-2 0v1h-1a1 1 0 000 2h1v10h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h2a3.99 3.99 0 001.312-7.76zM8.992 7.002h4a2 2 0 010 4h-4zm6 10h-6v-4h6a2 2 0 110 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBitcoinAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;