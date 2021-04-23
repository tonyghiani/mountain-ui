import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgEnvelopeRedo(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M20.5 14.26a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V9.67l5.88 5.88a3 3 0 002.11.88 3 3 0 002.16-.91 1 1 0 000-1.39 1 1 0 00-1.43 0 1 1 0 01-1.4 0L4.91 8.26H9.5a1 1 0 000-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm1-11a1 1 0 00-1 1 5 5 0 10-3 9A5 5 0 0020.8 12a1 1 0 00-1.32-1.51 3 3 0 11.25-4.24H18.5a1 1 0 000 2h3a1 1 0 001-1v-3a1 1 0 00-1-.99z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgEnvelopeRedo);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;