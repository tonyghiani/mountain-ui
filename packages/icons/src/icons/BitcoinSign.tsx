import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgBitcoinSign(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M19 9a4 4 0 00-4-4V3a1 1 0 00-2 0v2h-2V3a1 1 0 00-2 0v2H6a1 1 0 000 2h1v10H6a1 1 0 000 2h3v2a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2a4 4 0 002.62-7A4 4 0 0019 9zm-4 8H9v-4h6a2 2 0 010 4zm0-6H9V7h6a2 2 0 010 4z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgBitcoinSign);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;