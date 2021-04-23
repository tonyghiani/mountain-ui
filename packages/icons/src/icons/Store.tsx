import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgStore(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M22 7.82a1.25 1.25 0 000-.19l-2-5A1 1 0 0019 2H5a1 1 0 00-.93.63l-2 5a1.25 1.25 0 000 .19A.58.58 0 002 8a4 4 0 002 3.4V21a1 1 0 001 1h14a1 1 0 001-1v-9.56A4 4 0 0022 8a.58.58 0 000-.18zM13 20h-2v-4h2zm5 0h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6v-8a4 4 0 003-1.38 4 4 0 006 0A4 4 0 0018 12zm0-10a2 2 0 01-2-2 1 1 0 00-2 0 2 2 0 01-4 0 1 1 0 00-2 0 2 2 0 01-4 .15L5.68 4h12.64L20 8.15A2 2 0 0118 10z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgStore);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;