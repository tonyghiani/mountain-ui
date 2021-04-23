import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icon.types';

function SvgEnvelopeShare(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20 14a1 1 0 00-1 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V9.41l5.88 5.89a3 3 0 002.11.87 3.08 3.08 0 002.16-.9l1.72-1.72a1 1 0 10-1.42-1.42l-1.75 1.75a1 1 0 01-1.4 0L4.41 8H10a1 1 0 000-2H4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm0-6a2 2 0 00-1.18.39l-1.75-.8L19 6.71A2 2 0 0020 7a2 2 0 10-2-2l-1.9.87A2 2 0 0015 5.5a2 2 0 000 4 1.88 1.88 0 00.92-.24l2.1 1A2 2 0 1020 8z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeShare);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
