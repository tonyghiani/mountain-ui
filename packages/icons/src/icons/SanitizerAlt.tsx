import * as React from 'react';
import { Icon } from '@mountain-ui/react-components';

import { IconPresetProps } from '../icons.types';

function SvgSanitizerAlt(props: IconPresetProps, svgRef?: React.Ref<SVGSVGElement>) {
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
        <path d='M14 15h-2a1 1 0 000 2h2a1 1 0 000-2zm2-7V5a1 1 0 00-1-1h-1V3h1a1 1 0 000-2h-4.764a4.593 4.593 0 00-4.13 2.553 1 1 0 001.789.894A2.603 2.603 0 0110.235 3H12v1h-1a1 1 0 00-1 1v3a3.003 3.003 0 00-3 3v9a3.003 3.003 0 003 3h6a3.003 3.003 0 003-3v-9a3.003 3.003 0 00-3-3zm-4-2h2v2h-2zm5 14a1.001 1.001 0 01-1 1h-6a1.001 1.001 0 01-1-1v-9a1.001 1.001 0 011-1h6a1.001 1.001 0 011 1z' />
      </svg>
    </Icon>
  );
}

const ForwardRef = React.forwardRef(SvgSanitizerAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;