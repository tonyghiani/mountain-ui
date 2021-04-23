import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgTrademarkCircle(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M10 9H7a1 1 0 000 2h.5v3a1 1 0 002 0v-3h.5a1 1 0 000-2zm7.38.08a1 1 0 00-1.09.21L15 10.59l-1.29-1.3a1 1 0 00-1.09-.21A1 1 0 0012 10v4a1 1 0 002 0v-1.59l.29.3a1 1 0 001.42 0l.29-.3V14a1 1 0 002 0v-4a1 1 0 00-.62-.92zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgTrademarkCircle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
